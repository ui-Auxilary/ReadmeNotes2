---
title: Steep green tea
description: Heat water to 80°C and steep Japanese green tea for two minutes.
hidden: false
---
```javascript steep.js
const WATER_TEMP_C = 80;
const STEEP_TIME_MS = 2 * 60 * 1000;

function heatWater(tempC) {
  console.log(`Heating water to ${tempC}°C`);
}

heatWater(WATER_TEMP_C);

console.log('Steeping green tea for 2 minutes...');
setTimeout(() => {
  console.log('Done! Pour and enjoy.');
}, STEEP_TIME_MS);

```

# Heat the water to 80°C

<!-- javascript@1-6 -->

Heat your kettle to 80°C (176°F). Water that is too hot makes green tea bitter.

# Steep for two minutes

<!-- javascript@8-14 -->

Pour the water over the leaves and steep for two minutes, then pour off the tea.