import { Bot, Type, FileOutput, Wand2, Play, Settings, Trash2, Loader } from 'lucide-react';

interface Props {
  onAdd: (kind: string) => void;
  onRun: () => void;
  onClear: () => void;
  onSettings: () => void;
  running: boolean;
  hasKey: boolean;
}

const nodeButtons = [
  { kind: 'input',     icon: Type,       label: 'Input',     color: '#60a5fa' },
  { kind: 'agent',     icon: Bot,        label: 'Agent',     color: '#a78bfa' },
  { kind: 'transform', icon: Wand2,      label: 'Transform', color: '#34d399' },
  { kind: 'output',    icon: FileOutput, label: 'Output',    color: '#fb923c' },
];

export function Toolbar({ onAdd, onRun, onClear, onSettings, running, hasKey }: Props) {
  return (
    <div style={{
      position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', alignItems: 'center', gap: 6,
      background: '#1e1e2e', border: '1px solid #2d2d3f', borderRadius: 12,
      padding: '8px 12px', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{ fontSize: 11, color: '#4a4a6a', marginRight: 4, fontWeight: 600, letterSpacing: '0.05em' }}>ADD</span>
      {nodeButtons.map(({ kind, icon: Icon, label, color }) => (
        <button
          key={kind}
          onClick={() => onAdd(kind)}
          title={`Add ${label} node`}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 10px', borderRadius: 7,
            background: 'rgba(255,255,255,0.04)', border: '1px solid #2d2d3f',
            color, fontSize: 12, fontWeight: 500, cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
        >
          <Icon size={13} />
          {label}
        </button>
      ))}

      <div style={{ width: 1, background: '#2d2d3f', height: 24, margin: '0 4px' }} />

      <button
        onClick={onRun}
        disabled={running}
        title={hasKey ? 'Run pipeline' : 'Add API key first'}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 14px', borderRadius: 7,
          background: running ? '#1a1a2e' : '#6366f1',
          border: '1px solid ' + (running ? '#2d2d3f' : '#818cf8'),
          color: running ? '#6b7280' : '#fff',
          fontSize: 12, fontWeight: 600, cursor: running ? 'not-allowed' : 'pointer',
          transition: 'background 0.15s',
        }}
      >
        {running ? <Loader size={13} style={{ animation: 'spin 1s linear infinite' }} /> : <Play size={13} />}
        {running ? 'Running…' : 'Run'}
      </button>

      <button
        onClick={onClear}
        title="Clear canvas"
        style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '6px 10px', borderRadius: 7,
          background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
          color: '#ef4444', fontSize: 12, cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(239,68,68,0.15)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(239,68,68,0.08)')}
      >
        <Trash2 size={13} />
      </button>

      <button
        onClick={onSettings}
        title="Settings"
        style={{
          display: 'flex', alignItems: 'center',
          padding: '6px 8px', borderRadius: 7,
          background: hasKey ? 'rgba(99,102,241,0.1)' : 'rgba(239,68,68,0.1)',
          border: '1px solid ' + (hasKey ? '#2d2d3f' : 'rgba(239,68,68,0.3)'),
          color: hasKey ? '#6b7280' : '#ef4444', cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        onMouseLeave={e => (e.currentTarget.style.background = hasKey ? 'rgba(99,102,241,0.1)' : 'rgba(239,68,68,0.1)')}
      >
        <Settings size={14} />
      </button>
    </div>
  );
}
