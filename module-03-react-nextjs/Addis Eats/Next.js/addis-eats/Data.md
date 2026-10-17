# Day-16: Data Fetching

## SWR Polling
The orders page refreshes its data every 5 seconds using SWR's refreshInterval.

## Debounced Search
Search requests wait 300 milliseconds after typing stops to reduce unnecessary API calls.

## Keep Previous Data
The keepPreviousData option keeps the previous results visible while new search or pagination results load.

## Pagination
The API accepts a page query parameter and returns paginated dish results.

## Note
This exercise currently demonstrates these behaviors with dish data, not actual order records.