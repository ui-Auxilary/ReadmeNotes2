---
title: Authentication
excerpt: >-
  Authenticate API requests by sending your API key in the X-TeaCapital-Key
  header.
api_config: authentication
hidden: true
icon: icon-key1
---
Every `/v1` route requires an API key. Send your key in the `X-TeaCapital-Key` request header.

```bash
curl https://api.teacapital.example/v1/teas \
  -H "X-TeaCapital-Key: YOUR_API_KEY"
```

<Callout icon="❗️" theme="error">
  The API does not accept `Authorization: Bearer` tokens. A request that sends a Bearer token gets `401 auth_scheme_removed`, even if the key itself is valid. Move the key to the `X-TeaCapital-Key` header.
</Callout>

## Authentication errors

| Status | `error` | Cause |
| --- | --- | --- |
| 401 | `auth_scheme_removed` | The request sent an `Authorization: Bearer` header. |
| 401 | `missing_api_key` | The request did not include the `X-TeaCapital-Key` header. |

Example error response:

```json
{
  "error": "auth_scheme_removed",
  "message": "Send your API key in the X-TeaCapital-Key header."
}
```
