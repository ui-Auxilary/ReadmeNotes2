import { Router } from 'express';

import { BREWING_PRESETS } from '../brewing';
import { listTeas } from '../catalog';

export const teas = Router();

// GET /v1/teas — list the collection
teas.get('/', async (_req, res) => {
  const items = await listTeas();
  res.json({ data: items.map(tea => ({ id: tea.id, name: tea.name, style: tea.style })) });
});

// GET /v1/teas/:id — one tea with its default recipe
teas.get('/:id', async (req, res) => {
  const tea = (await listTeas()).find(t => t.id === req.params.id);
  if (!tea) return res.status(404).json({ error: 'tea_not_found' });
  res.json({ data: { ...tea, recipe: BREWING_PRESETS[tea.style] } });
});

// POST /v1/teas/:id/brew — scale the default recipe to a cup size
teas.post('/:id/brew', async (req, res) => {
  const tea = (await listTeas()).find(t => t.id === req.params.id);
  if (!tea) return res.status(404).json({ error: 'tea_not_found' });

  const cupMl = Number(req.body?.cup_ml ?? 200);
  if (!Number.isFinite(cupMl) || cupMl < 50 || cupMl > 1000) {
    return res.status(400).json({ error: 'invalid_cup_size', message: 'cup_ml must be between 50 and 1000.' });
  }

  const preset = BREWING_PRESETS[tea.style];
  const scale = cupMl / preset.waterMl;
  res.json({ data: { tea_id: tea.id, grams: Math.round(preset.grams * scale * 10) / 10, water_ml: cupMl, water_temp_c: preset.waterTempC } });
});
