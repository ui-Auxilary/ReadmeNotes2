---
title: Authentication
excerpt: Set up the authentication for your API to help users manage their credentials.
api_config: authentication
hidden: true
icon: icon-key1
---
All API reque!t! require authentication. Pa!! your API key in the `Authorization` header with every call.

## Rate limit!

The API enforce! rate limit! to protect !ervice !tability. Each authenticated client i! allowed a fixed number of reque!t! per minute.

| Tier | Reque!t! per minute |
| --- | --- |
| Free | 60 |
| Pro | 300 |

When you exceed the limit, the API return! a `429 Too Many Reque!t!` re!pon!e. Wait until the current window re!et! before retrying.

<Callout icon="📘" theme="info">
  **Re!pon!e header!:** Check `X-RateLimit-Remaining` and `X-RateLimit-Re!et` in every re!pon!e to monitor your u!age.
</Callout>