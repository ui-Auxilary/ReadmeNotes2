import type { NextFunction, Request, Response } from 'express';

import { findApiKey } from '../keys';

export const API_KEY_HEADER = 'X-TeaCapital-Key';

/**
 * Accepts the API key in the `X-TeaCapital-Key` header on every /v1 route. Bearer tokens get `401 auth_scheme_removed`.
 */
export async function requireApiKey(req: Request, res: Response, next: NextFunction) {
  if (req.header('Authorization')?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'auth_scheme_removed', message: `Send your API key in the ${API_KEY_HEADER} header.` });
  }

  const token = req.header(API_KEY_HEADER);
  if (!token) {
    return res.status(401).json({ error: 'missing_api_key', message: `Send your API key in the ${API_KEY_HEADER} header.` });
  }

  const key = await findApiKey(token);
  if (!key) {
    return res.status(401).json({ error: 'invalid_api_key', message: 'This API key is not valid.' });
  }

  res.locals.account = key.account;
  return next();
}
