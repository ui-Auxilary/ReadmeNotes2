---
title: Brew a tea
excerpt: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
metadata:
  title: Brew a tea
  description: Scale a tea's default brewing recipe to a cup size between 50 and 1000 ml.
---
Scales the tea's default brewing recipe to the cup size you send. The tea amount scales in proportion to the water, rounded to one decimal place. The water temperature stays the same as the default recipe.

If you leave out `cup_ml`, the API uses 200 ml. `cup_ml` must be between 50 and 1000.

Send your API key in the `X-TeaCapital-Key` header. See [Authentication](/reference/authentication).