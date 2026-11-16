---
title: Brew a matcha latte
description: Brew a matcha latte with the teaCapital JavaScript SDK.
hidden: false
recipe:
  icon: 🍵
---
```javascript JavaScript
// 1. Install: npm install @teacapital/sdk
import { TeaCapital } from '@teacapital/sdk';

const tea = new TeaCapital({ apiKey: process.env.TEACAPITAL_API_KEY });

// 2. Whisk the matcha
const base = await tea.matcha.whisk({
  grams: 2,
  waterMl: 60,
  temperatureC: 80,
});

// 3. Pour the milk
const latte = await tea.latte.pour({
  base,
  milk: 'oat',
  milkMl: 180,
});

console.log(latte);
```

# Add the SDK

<!-- javascript@1-4 -->

Add the teaCapital JavaScript SDK to your project with `npm install @teacapital/sdk`, then create a client with your API key.

# Whip up the matcha

<!-- javascript@6-11 -->

Call `tea.matcha.whisk()` with 2 g of matcha and 60 ml of water at 80°C to make a frothy base.

# Pour the milk

<!-- javascript@13-20 -->

Hand the base to `tea.latte.pour()` with your preferred milk and amount to finish the latte.