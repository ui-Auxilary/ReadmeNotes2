---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
---
Scale a tea's default brewing recipe to your cup size. The tea amount is scaled in proportion to `cup_ml` and rounded to one decimal place. The water temperature stays the same as the default recipe.

## Authentication

Send your API key in the `X-TeaCapital-Key` header. Requests that send an `Authorization: Bearer` header are rejected with `401 auth_scheme_removed`.

```bash
curl -X POST https://api.teacapital.example/v1/teas/sencha-01/brew \
  -H "X-TeaCapital-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "cup_ml": 300 }'
```

## Errors

| Status | Error | Cause |
| --- | --- | --- |
| 400 | `invalid_cup_size` | `cup_ml` is not a number or is outside 50–1000. |
| 401 | `missing_api_key` | The `X-TeaCapital-Key` header is missing. |
| 401 | `auth_scheme_removed` | The request sent the API key as an `Authorization: Bearer` token. |
| 404 | `tea_not_found` | No tea matches the `id` path parameter. |