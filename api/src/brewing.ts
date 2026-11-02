export type TeaStyle = 'steamed-green' | 'roasted' | 'powdered';

export interface BrewingPreset {
  grams: number;
  waterMl: number;
  waterTempC: number;
  firstSteepSeconds?: number;
  whiskSeconds?: number;
}

export const BREWING_PRESETS: Record<TeaStyle, BrewingPreset> = {
  'steamed-green': { grams: 4, waterMl: 200, waterTempC: 75, firstSteepSeconds: 45 },
  roasted: { grams: 5, waterMl: 200, waterTempC: 95, firstSteepSeconds: 30 },
  powdered: { grams: 2, waterMl: 60, waterTempC: 80, whiskSeconds: 20 },
};
