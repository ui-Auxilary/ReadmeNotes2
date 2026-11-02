---
title: Scale a brewing recipe
excerpt: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
metadata:
  title: Scale a brewing recipe
  description: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
---
Scale a tea's default brewing recipe to the cup size you want. The tea amount is scaled to `cup_ml`, rounded to one decimal place. The water temperature stays the same as the default recipe.

```bash
curl -X POST https://api.teacapital.example/v1/teas/TEA_ID/brew \
  -H "X-TeaCapital-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "cup_ml": 300 }'
```

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

If you leave out `cup_ml`, it defaults to `200`. Values outside 50–1000 return `400 invalid_cup_size`.

## Errors

| Status | `error` | Cause |
| --- | --- | --- |
| `400` | `invalid_cup_size` | `cup_ml` is not a number, or is outside 50–1000. |
| `401` | `auth_scheme_removed` | The request sent `Authorization: Bearer <key>`. Send the key in `X-TeaCapital-Key` instead. |
| `401` | `missing_api_key` | The `X-TeaCapital-Key` header is missing or empty. |
| `404` | `tea_not_found` | No tea matches `id`. |