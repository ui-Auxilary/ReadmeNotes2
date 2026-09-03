---
title: Getting Started
excerpt: Set up the welcome page for your API to help users make their first call.
api_config: getting-started
hidden: true
icon: icon-book1
---
## Pagination

Endpoints that return lists of resources are paginated. Responses include `page`, `per_page`, and `total` fields. Use the `page` query parameter to request a specific page and `per_page` to control the number of items returned (default 20, max 100).