# Addis Eats Performance Report

## Before Optimization

**Route:** `/menu`  
**Test environment:** Chrome Lighthouse, Mobile

| Metric | Before |
|---|---:|
| Performance | 94 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |
| First Contentful Paint (FCP) | 0.8 s |
| Largest Contentful Paint (LCP) | 2.7 s |
| Total Blocking Time (TBT) | 70 ms |
| Cumulative Layout Shift (CLS) | 0.092 |
| Speed Index | 1.1 s |

## Changes Made

- Replaced internal navigation anchors with Next.js `Link` components to support client-side navigation.
- No images were present on the tested menu page, so no image optimization was applicable.
- No external font imports or third-party scripts were found in the reviewed root layout and package configuration.

## After Optimization

Record a new Lighthouse Mobile report using a production build.

| Metric | Before | After |
|---|---:|---:|
| Performance | 94 | 87 |
| Accessibility | 95 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 0.8 s | 0.9 s |
| LCP | 2.7 s | 3.2 s |
| TBT | 70 ms | 240ms |
| CLS | 0.092 | 0.092 |
| Speed Index | 1.1 s | 1.3s |


