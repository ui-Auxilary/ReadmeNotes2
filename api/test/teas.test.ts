import { describe, expect, it } from 'vitest';

import { BREWING_PRESETS } from '../src/brewing';

describe('BREWING_PRESETS', () => {
  it('has a preset for every tea style', () => {
    expect(Object.keys(BREWING_PRESETS).sort()).toEqual(['powdered', 'roasted', 'steamed-green']);
  });
});
