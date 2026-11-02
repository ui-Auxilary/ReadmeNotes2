import type { NextFunction, Request, Response } from 'express';

import { findApiKey } from '../keys';

/**
 * Accepts `Authorization: Bearer <api key>` on every /v1 route.
 */
export async function requireApiKey(req: Request, res: Response, next: NextFunction) {
  const header = req.header('Authorization') ?? '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'missing_api_key', message: 'Send your API key as a Bearer token.' });
  }

  const key = await findApiKey(token);
  if (!key) {
    return res.status(401).json({ error: 'invalid_api_key', message: 'This API key is not valid.' });
  }

  res.locals.account = key.account;
  return next();
}
