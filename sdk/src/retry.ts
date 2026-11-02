export interface RetryOptions {
  maxRetries: number;
  delayMs: number;
  retryOn: number[];
}

export const DEFAULT_RETRY: RetryOptions = {
  maxRetries: 2,
  delayMs: 1000,
  retryOn: [500, 502, 503],
};

/**
 * Retries `send` with a fixed delay between attempts.
 */
export async function withRetry<T>(send: () => Promise<Response>, options: Partial<RetryOptions> = {}): Promise<Response> {
  const { maxRetries, delayMs, retryOn } = { ...DEFAULT_RETRY, ...options };
  let attempt = 0;
  for (;;) {
    const res = await send();
    if (!retryOn.includes(res.status) || attempt >= maxRetries) return res;
    attempt += 1;
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }
}
