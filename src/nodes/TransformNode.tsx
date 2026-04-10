import { Handle, Position, useReactFlow } from '@xyflow/react';
import type { NodeProps, Node } from '@xyflow/react';
import { Wand2 } from 'lucide-react';
import type { NodeData } from '../types';

export function TransformNode({ id, data, selected }: NodeProps<Node<NodeData>>) {
  const { setNodes } = useReactFlow();

  const update = (patch: Partial<NodeData>) =>
    setNodes(ns => ns.map(n => n.id === id ? { ...n, data: { ...n.data, ...patch } } : n));

  const statusClass = data.status ?? 'idle';

  return (
    <div className={`ao-node ${selected ? 'selected' : ''} ${statusClass !== 'idle' ? statusClass : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div className="ao-node-header" style={{ color: '#34d399' }}>
        <div className="ao-node-icon" style={{ background: 'rgba(52,211,153,0.15)' }}>
          <Wand2 size={12} color="#34d399" />
        </div>
        <span style={{ flex: 1 }}>Transform</span>
        <div className={`status-dot ${statusClass}`} />
      </div>
      <div className="ao-node-body">
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>LABEL</div>
        <input
          type="text"
          value={data.label}
          onChange={e => update({ label: e.target.value })}
          style={{ marginBottom: 8 }}
          placeholder="Transform name"
        />
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>INSTRUCTION</div>
        <textarea
          rows={3}
          value={data.transformPrompt ?? ''}
          onChange={e => update({ transformPrompt: e.target.value })}
          placeholder="Translate to French. Keep the same format."
          style={{ marginBottom: data.output ? 8 : 0 }}
        />
        {data.output && (
          <>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>OUTPUT</div>
            <div className="output-text">{data.output}</div>
          </>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
