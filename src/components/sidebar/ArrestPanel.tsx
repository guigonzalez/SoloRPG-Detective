import { useState, useEffect, useMemo } from 'react';
import { getMysteryAnswerByCampaign, incrementArrestAttempts } from '../../services/storage/mystery-answer-repo';
import { verifyArrest, verifyHypothesis } from '../../services/ai/arrest-verifier';
import { getLanguage, getLanguageName } from '../../services/storage/settings-storage';
import * as messageRepo from '../../services/storage/message-repo';
import { useChatStore } from '../../store/chat-store';
import { t } from '../../services/i18n/use-i18n';
import type { Entity } from '../../types/models';

interface ArrestPanelProps {
  campaignId: string;
  entities: Entity[];
  maxAttempts: number;
  onCaseSolved: (answer: { criminal: string; weapon: string; motive: string }) => void;
  onCaseFailed: (answer?: { criminal: string; weapon: string; motive: string }) => void;
}

const SUSPECT_TYPES = ['suspect', 'character', 'npc'] as const;
const WEAPON_TYPES = ['evidence', 'item'] as const;

export function ArrestPanel({ campaignId, entities, maxAttempts, onCaseSolved, onCaseFailed }: ArrestPanelProps) {
  const [suspect, setSuspect] = useState('');
  const [weapon, setWeapon] = useState('');
  const [motive, setMotive] = useState('');
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [hasMystery, setHasMystery] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isTestingHypothesis, setIsTestingHypothesis] = useState(false);

  const { addMessage } = useChatStore();

  useEffect(() => {
    getMysteryAnswerByCampaign(campaignId).then((answer) => {
      setHasMystery(!!answer);
      if (answer) {
        setAttemptsUsed(answer.attemptsUsed ?? 0);
      }
    });
  }, [campaignId]);

  const attemptsRemaining = maxAttempts - attemptsUsed;
  const canArrest = hasMystery && attemptsRemaining > 0;
  const canTestHypothesis = hasMystery;

  const suspectOptions = useMemo(
    () => entities.filter((e) => SUSPECT_TYPES.includes(e.type as typeof SUSPECT_TYPES[number])).map((e) => e.name),
    [entities]
  );
  const weaponOptions = useMemo(
    () => entities.filter((e) => WEAPON_TYPES.includes(e.type as typeof WEAPON_TYPES[number])).map((e) => e.name),
    [entities]
  );
  const motiveOptions = t('arrest.commonMotives').split(',').map((m) => m.trim()).filter(Boolean);

  const handleTestHypothesis = async () => {
    if (!campaignId || !suspect.trim() || !weapon.trim() || !motive.trim()) return;

    const answer = await getMysteryAnswerByCampaign(campaignId);
    if (!answer) return;

    setIsTestingHypothesis(true);
    try {
      const languageName = getLanguageName(getLanguage());
      const result = await verifyHypothesis(
        answer,
        { criminal: suspect.trim(), weapon: weapon.trim(), motive: motive.trim() },
        languageName
      );

      const narrativeMessage = await messageRepo.createMessage({
        campaignId,
        role: 'ai',
        content: result.narrative,
      });
      addMessage(narrativeMessage);

      setSuspect('');
      setWeapon('');
      setMotive('');
    } catch (err) {
      console.error('Hypothesis test failed:', err);
      const errorMsg = await messageRepo.createMessage({
        campaignId,
        role: 'system',
        content: t('errors.failedToVerifyArrest'),
      });
      addMessage(errorMsg);
    } finally {
      setIsTestingHypothesis(false);
    }
  };

  const handleSubmitArrest = async () => {
    if (!campaignId || !suspect.trim() || !weapon.trim() || !motive.trim()) {
      return;
    }

    const answer = await getMysteryAnswerByCampaign(campaignId);
    if (!answer) return;

    setIsVerifying(true);

    try {
      const languageName = getLanguageName(getLanguage());
      const result = await verifyArrest(
        answer,
        { criminal: suspect.trim(), weapon: weapon.trim(), motive: motive.trim() },
        attemptsRemaining - 1,
        languageName
      );

      const narrativeMessage = await messageRepo.createMessage({
        campaignId,
        role: 'ai',
        content: result.narrative,
      });
      addMessage(narrativeMessage);

      if (result.correct) {
        const victoryContent = t('arrest.caseSolvedMessage', {
          criminal: answer.criminal,
          weapon: answer.weapon,
          motive: answer.motive,
        });
        const victoryMessage = await messageRepo.createMessage({
          campaignId,
          role: 'system',
          content: victoryContent,
        });
        addMessage(victoryMessage);
        setSuspect('');
        setWeapon('');
        setMotive('');
        onCaseSolved({
          criminal: answer.criminal,
          weapon: answer.weapon,
          motive: answer.motive,
        });
      } else {
        const newAttemptsUsed = await incrementArrestAttempts(campaignId);
        setAttemptsUsed(newAttemptsUsed);

        if (newAttemptsUsed >= maxAttempts) {
          const defeatContent = t('arrest.caseFailedMessage', {
            criminal: answer.criminal,
            weapon: answer.weapon,
            motive: answer.motive,
          });
          const defeatMessage = await messageRepo.createMessage({
            campaignId,
            role: 'system',
            content: defeatContent,
          });
          addMessage(defeatMessage);
          onCaseFailed({
            criminal: answer.criminal,
            weapon: answer.weapon,
            motive: answer.motive,
          });
        } else {
          setSuspect('');
          setWeapon('');
          setMotive('');
        }
      }
    } catch (err) {
      console.error('Arrest verification failed:', err);
      const errorMsg = await messageRepo.createMessage({
        campaignId,
        role: 'system',
        content: t('errors.failedToVerifyArrest'),
      });
      addMessage(errorMsg);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="arrest-panel">
      <h3 style={{
        fontSize: '14px',
        marginBottom: '8px',
        color: 'var(--color-accent)',
      }}>
        {t('arrest.title')}
      </h3>
      <div style={{
        fontSize: '12px',
        color: 'var(--color-text-secondary)',
        marginBottom: '12px',
      }}>
        {t('arrest.attemptsRemaining', { count: attemptsRemaining.toString() })}
      </div>
      {!hasMystery && (
        <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
          {t('arrest.noMysteryYet')}
        </div>
      )}

      <div style={{
        padding: '12px',
        border: '2px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)',
        marginBottom: '12px',
      }}>
        <h4 style={{ color: 'var(--color-accent)', marginBottom: '4px', fontSize: '12px' }}>
          {t('arrest.accusation')}
        </h4>
        <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
          {t('arrest.hypothesisHint')}
        </div>
        <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}>
          {t('arrest.selectHint')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          <div>
            <label style={{ fontSize: '10px', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '4px' }}>
              {t('arrest.suspect')}
            </label>
            <input
              type="text"
              list="arrest-suspects"
              value={suspect}
              onChange={(e) => setSuspect(e.target.value)}
              placeholder={suspectOptions.length ? undefined : t('arrest.suspectPlaceholder')}
              disabled={isVerifying || isTestingHypothesis}
              className="form-input"
              style={{
                width: '100%',
                padding: '6px 8px',
                fontSize: '13px',
                backgroundColor: 'var(--color-bg-primary)',
                border: '2px solid var(--color-border)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit',
              }}
            />
            <datalist id="arrest-suspects">
              {suspectOptions.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </div>
          <div>
            <label style={{ fontSize: '10px', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '4px' }}>
              {t('arrest.weapon')}
            </label>
            <input
              type="text"
              list="arrest-weapons"
              value={weapon}
              onChange={(e) => setWeapon(e.target.value)}
              placeholder={weaponOptions.length ? undefined : t('arrest.weaponPlaceholder')}
              disabled={isVerifying || isTestingHypothesis}
              className="form-input"
              style={{
                width: '100%',
                padding: '6px 8px',
                fontSize: '13px',
                backgroundColor: 'var(--color-bg-primary)',
                border: '2px solid var(--color-border)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit',
              }}
            />
            <datalist id="arrest-weapons">
              {weaponOptions.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </div>
          <div>
            <label style={{ fontSize: '10px', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '4px' }}>
              {t('arrest.motive')}
            </label>
            <input
              type="text"
              list="arrest-motives"
              value={motive}
              onChange={(e) => setMotive(e.target.value)}
              placeholder={t('arrest.motivePlaceholder')}
              disabled={isVerifying || isTestingHypothesis}
              className="form-input"
              style={{
                width: '100%',
                padding: '6px 8px',
                fontSize: '13px',
                backgroundColor: 'var(--color-bg-primary)',
                border: '2px solid var(--color-border)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit',
              }}
            />
            <datalist id="arrest-motives">
              {motiveOptions.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            className="retro-button"
            onClick={handleTestHypothesis}
            disabled={!canTestHypothesis || isVerifying || isTestingHypothesis || !suspect.trim() || !weapon.trim() || !motive.trim()}
            style={{ flex: 1, minWidth: '80px', padding: '8px', fontSize: '11px' }}
          >
            {isTestingHypothesis ? t('common.loading') : t('arrest.testHypothesis')}
          </button>
          <button
            className="retro-button"
            onClick={handleSubmitArrest}
            disabled={!canArrest || isVerifying || isTestingHypothesis || !suspect.trim() || !weapon.trim() || !motive.trim()}
            style={{ flex: 1, minWidth: '80px', padding: '8px', fontSize: '11px' }}
          >
            {isVerifying ? t('common.loading') : t('arrest.submit')}
          </button>
        </div>
      </div>
    </div>
  );
}
