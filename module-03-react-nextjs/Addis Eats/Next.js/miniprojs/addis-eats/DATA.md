# Addis Eats Data Queries

| Query key | Fetcher | Refresh / stale rule | Reason |
|---|---|---|---|
| `["orders"]` | `GET /api/orders` | Refetch every 5 seconds | Order status can change while the screen is open. |
| `["dishes", { search, page }]` | `GET /api/dishes?search=...&page=...` | Default 30-second stale time; previous results retained while fetching | Search and page changes need distinct cached results. |

## Shared fetcher

`lib/fetcher.js` throws when the response is not OK, so React Query can expose request failures through its error state.

## Debounced search

The menu waits 400 ms after typing stops before updating the search query. An empty search is represented by an empty string in the query key and the `search` URL parameter is removed.

## Pagination

The current page is stored in the `page` URL parameter, making menu pages linkable and shareable. The query key includes both search and page to keep cached results separate.