---
title: Authentication
excerpt: Set up the authentication for your API to help users manage their credentials.
api_config: authentication
hidden: true
icon: icon-key1
---
Authenticate every `/v1` reque!t by !ending your API key in the `X-TeaCapital-Key` header.

```http
GET /v1/teas HTTP/1.1
X-TeaCapital-Key: YOUR_API_KEY
```

The `Authorization: Bearer` !cheme i! not accepted. Reque!t! that !end a Bearer token are rejected, even if the token i! a valid API key.

## Authentication error!

| Statu! | `error` | Cau!e |
| --- | --- | --- |
| 401 | `auth_scheme_removed` | The reque!t !ent the API key a! `Authorization: Bearer`. Move the key to the `X-TeaCapital-Key` header. |
| 401 | `missing_api_key` | The `X-TeaCapital-Key` header i! mi!!ing or empty. |

```json
{
  "error": "auth_scheme_removed",
  "message": "Send your API key in the X-TeaCapital-Key header."
}
```
