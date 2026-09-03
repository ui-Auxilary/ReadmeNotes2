---
title: FAQ
excerpt: Answers to common questions about the teaCapital API and platform.
metadata:
  title: FAQ
  description: Answers to common questions about the teaCapital API and platform.
---
Find answers to common questions about using the teaCapital API and platform.

<Callout icon="📘" theme="info">
  **Fictional brand:** This page is sample documentation. teaCapital and the examples below are fictional.
</Callout>

## Token rotation

**Q: How does token rotation work?**

API tokens issued by teaCapital expire after a set period. When a token is close to expiring, request a new one using your refresh token before the current token becomes invalid. This keeps your integration running without downtime.

**Q: How often are tokens rotated?**

Access tokens expire every 60 minutes by default. Refresh tokens are valid for 30 days. You can adjust these durations in your project settings.

**Q: What happens if my token expires before I rotate it?**

Any request made with an expired access token returns a `401 Unauthorized` response. To recover, use your refresh token to obtain a new access token. If the refresh token has also expired, re-authenticate with your credentials.

**Q: Can I revoke a token before it expires?**

Yes. Call the token revocation endpoint with the token you want to invalidate. Revoked tokens cannot be reused, even if they have not yet expired.