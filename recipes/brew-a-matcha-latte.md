---
title: Brew a matcha latte
description: >-
  Use the teaCapital JavaScript SDK to whisk matcha and pour steamed milk for a
  latte.
hidden: false
recipe:
  icon: 🍵
---
```javascript matcha-latte.js
// npm install @teacapital/sdk
import { TeaCapital } from '@teacapital/sdk';

const tea = new TeaCapital({ apiKey: process.env.TEACAPITAL_API_KEY });

// Whisk the matcha
const matcha = await tea.whisk({
  powder: 'matcha',
  grams: 2,
  waterMl: 60,
  waterTempC: 80,
});

// Pour the milk
const latte = await tea.pour({
  base: matcha,
  milk: 'oat',
  milkMl: 180,
  steamed: true,
});

console.log(latte.summary);
```

# Install the SDK

<!-- javascript@1-4 -->

Install the teaCapital JavaScript SDK with npm, then import it and create a client with your API key.

# Whisk the matcha

<!-- javascript@6-12 -->

Whisk 2 g of matcha into 60 ml of water at 80°C / 176°F until the surface looks evenly mixed and lightly foamy.

# Pour the milk

<!-- javascript@14-22 -->

Pour steamed milk over the whisked matcha to finish the latte. Swap the milk type or volume to suit your taste.