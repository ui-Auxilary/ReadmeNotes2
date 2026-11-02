---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to a cup size.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to a cup size.
---
Scale a tea's default brewing recipe to your cup size. The tea amount scales with the water volume, and the water temperature stays the same as the default recipe.

Send your API key in the `X-TeaCapital-Key` header. Requests that use `Authorization: Bearer` get a `401` response with the error `auth_scheme_removed`.

```bash
curl -X POST https://api.teacapital.example/v1/teas/sencha-01/brew \
  -H "X-TeaCapital-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "cup_ml": 300 }'
```

`cup_ml` must be between 50 and 1000. If you leave it out, it defaults to 200 ml.