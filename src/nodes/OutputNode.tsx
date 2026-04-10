import { Handle, Position } from '@xyflow/react';
import type { NodeProps, Node } from '@xyflow/react';
import { FileOutput } from 'lucide-react';
import type { NodeData } from '../types';

export function OutputNode({ data, selected }: NodeProps<Node<NodeData>>) {
  const statusClass = data.status ?? 'idle';

  return (
    <div className={`ao-node ${selected ? 'selected' : ''} ${statusClass !== 'idle' ? statusClass : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div className="ao-node-header" style={{ color: '#fb923c' }}>
        <div className="ao-node-icon" style={{ background: 'rgba(251,146,60,0.15)' }}>
          <FileOutput size={12} color="#fb923c" />
        </div>
        <span style={{ flex: 1 }}>{data.label}</span>
        <div className={`status-dot ${statusClass}`} />
      </div>
      <div className="ao-node-body">
        <div className="output-text">{data.output ?? ''}</div>
      </div>
    </div>
  );
}
