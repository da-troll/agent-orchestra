import { Handle, Position, useReactFlow } from '@xyflow/react';
import type { NodeProps, Node } from '@xyflow/react';
import { Type } from 'lucide-react';
import type { NodeData } from '../types';

export function InputNode({ id, data, selected }: NodeProps<Node<NodeData>>) {
  const { setNodes } = useReactFlow();

  const update = (patch: Partial<NodeData>) =>
    setNodes(ns => ns.map(n => n.id === id ? { ...n, data: { ...n.data, ...patch } } : n));

  return (
    <div className={`ao-node ${selected ? 'selected' : ''} ${data.status === 'done' ? 'done' : ''}`}>
      <div className="ao-node-header" style={{ color: '#60a5fa' }}>
        <div className="ao-node-icon" style={{ background: 'rgba(96,165,250,0.15)' }}>
          <Type size={12} color="#60a5fa" />
        </div>
        <span style={{ flex: 1 }}>Input</span>
        <div className={`status-dot ${data.status ?? 'idle'}`} />
      </div>
      <div className="ao-node-body">
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>LABEL</div>
        <input
          type="text"
          value={data.label}
          onChange={e => update({ label: e.target.value })}
          style={{ marginBottom: 8 }}
          placeholder="Input name"
        />
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>VALUE</div>
        <textarea
          rows={3}
          value={data.value ?? ''}
          onChange={e => update({ value: e.target.value })}
          placeholder="Enter text to pass downstream…"
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
