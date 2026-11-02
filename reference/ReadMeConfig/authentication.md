---
title: Authentication
excerpt: Set up the authentication for your API to help users manage their credentials.
api_config: authentication
hidden: true
icon: icon-key1
---
Every `/v1` request must include your teaCapital API key in the `X-TeaCapital-Key` header.

```bash
curl https://api.teacapital.example/v1/teas \
  -H "X-TeaCapital-Key: YOUR_API_KEY"
```

<Callout icon="⚠️" theme="warn">
  The API does not accept `Authorization: Bearer` tokens. Requests that send a Bearer token are rejected with `401 auth_scheme_removed`. Move your key to the `X-TeaCapital-Key` header.
</Callout>

## Authentication errors

| Status | `error` | Cause |
| --- | --- | --- |
| `401` | `auth_scheme_removed` | The request sent `Authorization: Bearer <key>`. Send the key in `X-TeaCapital-Key` instead. |
| `401` | `missing_api_key` | The `X-TeaCapital-Key` header is missing or empty. |

```json
{
  "error": "auth_scheme_removed",
  "message": "Send your API key in the X-TeaCapital-Key header."
}
```
