# Addis Eats Authentication and Security

## Session design

- Sessions are signed JWTs stored in an HTTP-only cookie.
- The cookie uses `sameSite: "lax"`, `path: "/"`, and `secure` in production.
- `getSession()` verifies the signature and expiration on the server.
- Sign-out clears the session cookie.
- Demo credentials are stored in `.env.local`, which must not be committed.

## Protected routes

| Route | Protection layers | What each layer proves |
|---|---|---|
| `/orders` | Proxy and server-rendered page | Proxy redirects requests without a valid signed session; the page independently checks the session. |
| `/staff` | Proxy and server-rendered page | Proxy checks for a valid session; the page also checks that the verified role is `staff`. |
| `GET /api/orders` | Handler | Verifies the session and returns only orders owned by that user. |
| `POST /api/orders` | Handler | Verifies the session and assigns ownership from the session rather than request data. |
| `placeOrder` | Server Action | Verifies the session and assigns order ownership on the server. |

## Redirect validation

The sign-in action validates the `next` parameter and rejects protocol-relative destinations, backslashes, and non-local paths. Invalid destinations fall back to `/menu`.

## Security tests

1. **Unauthenticated access:** Open `/orders` in a signed-out browser. Expected: redirect to sign-in with the original destination preserved.
2. **Open redirect:** Visit `/sign-in?next=https://example.com`. Expected: successful sign-in redirects to `/menu`, not the external site.
3. **Cross-user order access:** Sign in as one user and request orders belonging to another user. Expected: the API returns only orders belonging to the current session.

Record the actual result of each test before submitting.
