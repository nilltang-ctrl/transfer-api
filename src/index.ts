{
  "ok": true,
  "service": "unlimited.surf OpenAI/Anthropic compatibility Worker",
  "upstream": "https://unlimited.surf",
  "routes": {
    "raw": "https://api.66677.xyz/api/chat, /api/search, /api/merge, /api/models, /api/key, /api/attachments/extract",
    "openai": "https://api.66677.xyz/v1/chat/completions, /v1/responses, /v1/models, /v1/files",
    "anthropic": "https://api.66677.xyz/v1/messages or https://api.66677.xyz/anthropic/v1/messages",
    "setup": "https://api.66677.xyz/v1/setup, /v1/codex, /v1/mcp"
  }
}
