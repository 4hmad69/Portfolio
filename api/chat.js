export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);

    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  const { messages } = req.body ?? {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      error: 'A non-empty messages array is required',
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

  if (!apiKey) {
    return res.status(500).json({
      error: 'Server configuration error: Missing GROQ_API_KEY',
    });
  }

  try {
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API response error:', data);

      return res.status(response.status).json({
        error: data.error?.message || 'Groq API request failed',
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Groq API error:', error);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}
