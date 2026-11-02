---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to your cup size.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to your cup size.
---
Scales a tea's default recipe to the cup size you send in `cup_ml`. The amount of tea scales with the water volume, and the water temperature stays the same as the default recipe. If you leave out `cup_ml`, the recipe is scaled to 200 ml.

Send your API key in the `X-TeaCapital-Key` header. Requests that send `Authorization: Bearer` get a `401` response with the error `auth_scheme_removed`.

```bash
curl -X POST https://api.teacapital.example/v1/teas/{id}/brew \
  -H "X-TeaCapital-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"cup_ml": 300}'
```