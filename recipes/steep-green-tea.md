---
title: Steep green tea
description: Heat water to 80°C and steep Japanese green tea for two minutes.
hidden: false
---
```javascript steep.js
const WATER_TEMP_C = 80;
console.log(`Heat the water to ${WATER_TEMP_C}°C`);

const STEEP_MS = 2 * 60 * 1000;
console.log('Steeping green tea for two minutes...');
setTimeout(() => {
  console.log('Done! Strain and serve.');
}, STEEP_MS);
```

# Heat the water to 80°C

<!-- javascript@1-2 -->

Heat fresh, soft or filtered water to 80°C (176°F). Hotter water can make green tea bitter.

# Steep for two minutes

<!-- javascript@4-8 -->

Pour the water over the leaves and steep for two minutes, then strain and serve.