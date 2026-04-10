export type NodeKind = 'input' | 'agent' | 'output' | 'transform';
export type NodeStatus = 'idle' | 'running' | 'done' | 'error';

export interface NodeData extends Record<string, unknown> {
  kind: NodeKind;
  label: string;
  value?: string;
  systemPrompt?: string;
  model?: string;
  transformPrompt?: string;
  status?: NodeStatus;
  output?: string;
}
