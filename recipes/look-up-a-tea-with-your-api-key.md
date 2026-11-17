---
title: Look up a tea with your API key
description: Authenticate with your API key, list the teas and look one up.
hidden: false
---
```javascript Node.js
const API = 'https://api.teacapital.com/v1';
const headers = { Authorization: `Bearer ${process.env.TEACAPITAL_API_KEY}` };

// List every tea
const teas = await fetch(`${API}/teas`, { headers }).then(res => res.json());

// Look up one tea by id
const tea = await fetch(`${API}/teas/${teas[0].id}`, { headers }).then(res => res.json());
console.log(tea.name);
```

# Send your API key

<!-- javascript@1-2 -->

Every `/v1` request needs your API key in the `Authorization` header as a Bearer token. A missing or wrong key returns `401 missing_api_key`.

# List the teas

<!-- javascript@4-5 -->

`GET /v1/teas` returns every tea in the catalog.

# Look up one tea

<!-- javascript@7-9 -->

`GET /v1/teas/{id}` returns a single tea.