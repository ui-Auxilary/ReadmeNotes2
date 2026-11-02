---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to a cup size.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to a cup size.
---
Scales the tea's default brewing recipe to the cup size you request. The tea amount scales with `cup_ml`. The water temperature and first steep time stay the same as the default recipe.

Send your API key in the `X-TeaCapital-Key` header. Requests that send a key as `Authorization: Bearer` get a `401` response with the `auth_scheme_removed` error.