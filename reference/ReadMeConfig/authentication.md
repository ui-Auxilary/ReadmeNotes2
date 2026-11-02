---
title: Authentication
excerpt: Set up the authentication for your API to help users manage their credentials.
api_config: authentication
hidden: true
icon: icon-key1
---
Authenticate every `/v1` request by sending your API key in the `X-TeaCapital-Key` header.

```bash
curl https://api.teacapital.example/v1/teas \
  -H "X-TeaCapital-Key: YOUR_API_KEY"
```

<Callout icon="❗️" theme="error">
  The API does not accept API keys in the `Authorization: Bearer` header. Requests that use a Bearer token get a `401` response with the `auth_scheme_removed` error.
</Callout>

## Authentication errors

| Status | Error | Cause |
| --- | --- | --- |
| `401` | `auth_scheme_removed` | The request sent `Authorization: Bearer <key>`. Send the key in the `X-TeaCapital-Key` header. |
| `401` | `missing_api_key` | The request has no `X-TeaCapital-Key` header. |

```json
{
  "error": "auth_scheme_removed",
  "message": "Send your API key in the X-TeaCapital-Key header."
}
```
