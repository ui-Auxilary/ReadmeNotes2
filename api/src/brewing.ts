export type TeaStyle = 'steamed-green' | 'roasted' | 'powdered';

export interface BrewingPreset {
  grams: number;
  waterMl: number;
  waterTempC: number;
  firstSteepSeconds?: number;
  whiskSeconds?: number;
}

export const BREWING_PRESETS: Record<TeaStyle, BrewingPreset> = {
  'steamed-green': { grams: 5, waterMl: 200, waterTempC: 70, firstSteepSeconds: 60 },
  roasted: { grams: 5, waterMl: 200, waterTempC: 90, firstSteepSeconds: 60 },
  powdered: { grams: 2, waterMl: 60, waterTempC: 80, whiskSeconds: 20 },
};
