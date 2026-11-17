---
title: Brew a cup with a scaled recipe
description: >-
  Look up a tea, then call POST /v1/teas/{id}/brew to scale its default recipe
  to your cup size.
recipe:
  color: '#018FF4'
  icon: 🍵
---
```javascript Node.js
const API = 'https://api.teacapital.com/v1';
const headers = {
  Authorization: `Bearer ${process.env.TEACAPITAL_API_KEY}`,
  'Content-Type': 'application/json',
};

// Look up the tea and its default recipe
const teaId = 'YOUR_TEA_ID';
const { data: tea } = await fetch(`${API}/teas/${teaId}`, { headers }).then(res => res.json());
console.log(tea.name, tea.recipe);

// Scale the recipe to a 300 ml cup
const res = await fetch(`${API}/teas/${teaId}/brew`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ cup_ml: 300 }),
});
if (!res.ok) throw new Error((await res.json()).error);

const { data: brew } = await res.json();
console.log(`${brew.grams} g tea, ${brew.waterMl} ml water at ${brew.waterTempC}°C, steep ${brew.firstSteepSeconds} s`);
```

```json Response Example
{
  "data": {
    "grams": 7.5,
    "waterMl": 300,
    "waterTempC": 70,
    "firstSteepSeconds": 60
  }
}
```

# Send your API key

<!-- javascript@1-5 -->

Every `/v1` request needs your API key in the `Authorization` header as a Bearer token. The brew endpoint takes a JSON body, so also send `Content-Type: application/json`.

# Look up the tea

<!-- javascript@7-10 -->

`GET /v1/teas/{id}` returns the tea in `data`, including its default `recipe` (`grams`, `waterMl`, `waterTempC` and `firstSteepSeconds`). An unknown id returns `404 tea_not_found`.

# Scale the recipe to your cup

<!-- javascript@12-18 -->

`POST /v1/teas/{id}/brew` scales the tea's default recipe to `cup_ml`, which must be between 50 and 1000 ml. A value outside that range returns `400 invalid_cup_ml`, and an unknown id returns `404 tea_not_found`.

# Read the scaled recipe

<!-- javascript@20-21 -->

The response `data` holds the scaled tea amount in `grams` (rounded to one decimal place), `waterMl` (your `cup_ml`), and the tea's `waterTempC` and `firstSteepSeconds`. Only the tea amount scales; the temperature and steep time stay the same as the default recipe.