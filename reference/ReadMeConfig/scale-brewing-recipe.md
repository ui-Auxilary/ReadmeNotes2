---
title: Scale a brewing recipe
excerpt: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
metadata:
  title: Scale a brewing recipe
  description: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
---
Scale a tea's default brewing recipe to your cup size. The API scales the tea amount in proportion to `cup_ml` and returns the recipe's water temperature unchanged.

Send your API key in the `X-TeaCapital-Key` header. See [Authentication](/reference/authentication).

```bash
curl -X POST https://api.teacapital.example/v1/teas/TEA_ID/brew \
  -H "X-TeaCapital-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "cup_ml": 300 }'
```

`cup_ml` must be between 50 and 1000. If you leave it out, the API uses 200 ml.

```json
{
  "data": {
    "tea_id": "TEA_ID",
    "grams": 6,
    "water_ml": 300,
    "water_temp_c": 75
  }
}
```

`grams` is rounded to one decimal place.

## Errors

| Status | `error` | Cause |
| --- | --- | --- |
| `400` | `invalid_cup_size` | `cup_ml` is not a number or is outside the range of 50 to 1000. |
| `401` | `auth_scheme_removed` | The request sent `Authorization: Bearer <key>`. Send the key in `X-TeaCapital-Key` instead. |
| `401` | `missing_api_key` | The `X-TeaCapital-Key` header is missing or empty. |
| `404` | `tea_not_found` | No tea matches the `id` in the path. |