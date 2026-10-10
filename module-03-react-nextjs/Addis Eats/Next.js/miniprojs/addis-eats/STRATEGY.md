# Addis Eats — Rendering Strategy

## 1. Home Page (`/`)

**Strategy:** Static rendering (○)

The home page is prerendered at build time because its content does not require request-specific data.

## 2. Menu Page (`/menu`)

**Strategy:** Static rendering with Suspense

The menu page is prerendered as static content. React Suspense provides a fallback while the asynchronous dish-list component is loading. The shared menu layout contains the counter and sidebar, allowing the counter state to persist when navigating between menu and dish pages through Next.js client-side navigation.

## 3. Dish Details (`/menu/[id]`)

**Strategy:** Static Site Generation (SSG) (●)

The `generateStaticParams()` function generates pages for the known dish IDs at build time:

* `/menu/1` — Doro Wot
* `/menu/2` — Tibs
* `/menu/3` — Shiro

Unknown dish IDs are handled by the `notFound()` function.

## 4. Cart Page (`/cart`)

**Strategy:** Static rendering (○)

The route is prerendered at build time. If user-specific cart information is added later, its data-handling strategy may need to change.

## 5. Checkout Page (`/checkout`)

**Strategy:** Dynamic rendering (ƒ)

The route exports `dynamic = "force-dynamic"`, which forces server rendering on demand instead of static prerendering.

## 6. Not-Found Page

**Strategy:** Static rendering (○)

The not-found page is prerendered for requests that do not match a valid route.

## Build Verification

The production build completed successfully. The route table confirmed that the home, menu, cart, and not-found routes are static; dish detail pages use SSG; and checkout is dynamic.

## Revalidation Strategy

The current menu and dish data comes from a local JavaScript data file, so time-based revalidation is not necessary. If the menu later comes from a database or external API, a suitable revalidation interval can be introduced based on how frequently dish information changes.
