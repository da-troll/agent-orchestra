const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

export function getApiKey(): string {
  return localStorage.getItem('ao_api_key') || '';
}

export function setApiKey(key: string) {
  localStorage.setItem('ao_api_key', key);
}

export async function callClaude(
  systemPrompt: string,
  userMessage: string,
  model = 'claude-haiku-4-5-20251001',
  apiKey?: string,
): Promise<string> {
  const key = apiKey || getApiKey();
  if (!key) throw new Error('No Claude API key configured. Click ⚙ to add your key.');

  const res = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system: systemPrompt || 'You are a helpful assistant.',
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any)?.error?.message || `API error ${res.status}`);
  }

  const data = await res.json();
  return (data.content?.[0]?.text ?? '').trim();
}
