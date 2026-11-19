---
title: Look up a tea with your API key
description: Authenticate with your API key and look up a tea.
hidden: false
recipe:
  color: '#018FF4'
  icon: 🦉
---
```javascript Node.js
const API = 'https://api.teacapital.com/v1';
const headers = { Authorization: `Bearer ${process.env.TEACAPITAL_API_KEY}` };

// Look up one tea by id
const teaId = 'YOUR_TEA_ID';
const tea = await fetch(`${API}/teas/${teaId}`, { headers }).then(res => res.json());
console.log(tea.name);
```

# Send your API key

<!-- javascript@1-2 -->

Every `/v1` request needs your API key in the `Authorization` header as a Bearer token. A missing or wrong key returns `401 missing_api_key`.

# Look up one tea

<!-- javascript@4-7 -->

`GET /v1/teas/{id}` returns a single tea.