---
title: Brew a matcha latte
description: >-
  Use the teaCapital JavaScript SDK to whisk matcha and pour steamed milk for a
  latte.
hidden: false
---
```javascript matcha-latte.js
// npm install @teacapital/sdk
import { TeaCapital } from '@teacapital/sdk';

const tea = new TeaCapital({ apiKey: process.env.TEACAPITAL_API_KEY });

const matcha = await tea.matcha.whisk({
  powderGrams: 2,
  waterMl: 60,
  waterTempC: 80,
  whiskSeconds: 20,
});

const latte = await tea.latte.pour({
  base: matcha.id,
  milk: 'steamed',
  milkMl: 180,
});

console.log(`Your latte is ready: ${latte.id}`);
```

# Install the SDK

<!-- javascript@1-4 -->

Install the teaCapital JavaScript SDK with npm, then import it and create a client.

# Whisk the matcha

<!-- javascript@6-11 -->

Sift 2 g of matcha into the bowl, add 60 ml of water at 80°C / 176°F, and whisk in a zigzag motion for about 20 seconds until lightly foamy.

# Pour the milk

<!-- javascript@13-17 -->

Pour 180 ml of steamed milk over the whisked matcha to finish the latte.