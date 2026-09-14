# Performance Profile

## Before

Checkout was loaded with the main application bundle.

## After

Checkout is lazy-loaded with React.lazy() and Suspense.

## Measurement

Before:
- Checkout code loaded with the initial application.

After:
- Checkout code loads only when navigating to /checkout.

## Resilience

Menu and Cart have separate ErrorBoundary components.

A failure in Menu does not crash the Cart or the rest of the application.

## Accessibility

The modal:
- Uses createPortal
- Closes with Escape
- Traps keyboard focus
- Returns focus to the previously focused element