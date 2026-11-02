export interface RetryOptions {
  maxRetries: number;
  delayMs: number;
  retryOn: number[];
}

export const DEFAULT_RETRY: RetryOptions = {
  maxRetries: 3,
  delayMs: 500,
  retryOn: [429, 500, 502, 503],
};

/**
 * Retries `send` with exponential backoff (delayMs, then doubling). A 429 waits for `Retry-After` when the server sends it.
 */
export async function withRetry<T>(send: () => Promise<Response>, options: Partial<RetryOptions> = {}): Promise<Response> {
  const { maxRetries, delayMs, retryOn } = { ...DEFAULT_RETRY, ...options };
  let attempt = 0;
  for (;;) {
    const res = await send();
    if (!retryOn.includes(res.status) || attempt >= maxRetries) return res;
    attempt += 1;
    const retryAfter = Number(res.headers.get('retry-after'));
    const wait = res.status === 429 && retryAfter > 0 ? retryAfter * 1000 : delayMs * 2 ** (attempt - 1);
    await new Promise(resolve => setTimeout(resolve, wait));
  }
}
