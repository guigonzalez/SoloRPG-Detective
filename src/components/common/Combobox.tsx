import { useState, useRef, useEffect } from 'react';

interface ComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  id?: string;
}

export function Combobox({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  label,
  id,
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const query = value.trim().toLowerCase();
  const filtered =
    query.length === 0
      ? options
      : options.filter((o) => o.toLowerCase().includes(query));

  useEffect(() => {
    setHighlightIndex(-1);
  }, [value, filtered]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => (i < filtered.length - 1 ? i + 1 : i));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => (i > 0 ? i - 1 : -1));
      return;
    }
    if (e.key === 'Enter' && highlightIndex >= 0 && filtered[highlightIndex]) {
      e.preventDefault();
      onChange(filtered[highlightIndex]);
      setIsOpen(false);
    }
  };

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontSize: '10px',
            color: 'var(--color-text-secondary)',
            display: 'block',
            marginBottom: '4px',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="retro-input form-input"
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
      {isOpen && !disabled && (
        <ul
          role="listbox"
          aria-expanded={isOpen}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            margin: 0,
            marginTop: '2px',
            padding: '4px 0',
            listStyle: 'none',
            maxHeight: '160px',
            overflowY: 'auto',
            backgroundColor: 'var(--color-bg-primary)',
            border: '2px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
            zIndex: 100,
          }}
        >
          {filtered.length === 0 ? (
            <li
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
              }}
            >
              —
            </li>
          ) : (
            filtered.map((opt, i) => (
              <li
                key={opt}
                role="option"
                aria-selected={highlightIndex === i}
                onClick={() => handleSelect(opt)}
                onMouseEnter={() => setHighlightIndex(i)}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  backgroundColor:
                    highlightIndex === i ? 'var(--color-accent)' : 'transparent',
                  color: highlightIndex === i ? 'var(--color-selection-fg)' : 'var(--color-text-primary)',
                }}
              >
                {opt}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
