
# Day 13 — Component Boundary Audit

| Component | Location | Type | Reason |
|---|---|---|---|
| RootLayout | app/layout.js | Server | Renders shared layout and metadata without client state |
| HomePage | app/page.js | Server | Static informational content |
| MenuPage | app/menu/page.js | Server | Renders the menu heading and Suspense boundary |
| SlowDishList | app/menu/page.js | Server | Demonstrates asynchronous rendering |
| DishList | app/menu/DishList.js | Server | Renders dish data without client-side hooks |
| Loading | app/menu/loading.js | Server | Displays route loading UI |
| Error | app/menu/error.js | Client | Error boundaries require client-side recovery |
| DishPage | app/menu/[id]/page.js | Server | Reads route params and finds the requested dish |
| CartPage | app/cart/page.js | Server | Currently displays static content |
| CheckoutPage | app/checkout/page.js | Server | Currently displays static content |
| HomePage | app/page.js | Server | Displays the home page |

## Boundary decisions

- Keep `"use client"` only where browser interaction or client hooks are needed.
- Keep data mapping and dish rendering on the server.
- Keep the root layout as a Server Component.
- Use Suspense for the delayed dish-list content.
- No cart provider is needed yet because the current cart page is static and does not use client state.