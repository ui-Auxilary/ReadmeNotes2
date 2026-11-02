---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to a cup size.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to a cup size.
---
Scales the tea's default brewing recipe to the cup size you send in `cup_ml`. The API scales the tea amount to the cup size and rounds it to one decimal place. The water temperature stays the same as the default recipe.

If you leave out `cup_ml`, the API uses 200 ml. `cup_ml` must be between 50 and 1000.

Authenticate with the `X-TeaCapital-Key` header. See [Authentication](/reference/authentication).