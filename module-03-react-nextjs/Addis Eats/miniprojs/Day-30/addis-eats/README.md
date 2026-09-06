# Addis Eats — Week 1 React Project

Addis Eats is a React menu and cart application that brings together the main React concepts covered during Week 1.

## Features

* Fetches the menu from a JSON API.
* Displays loading and error states.
* Filters dishes by category.
* Uses a custom `useFetch` hook with request cleanup using `AbortController`.
* Uses `useReducer` to manage all cart actions.
* Uses React Context to share cart state without prop drilling.
* Displays the number of items in the cart through `CartBadge`.
* Displays cart items and the total price in the checkout panel.
* Supports adding, removing, and clearing cart items.
* Calculates the total dynamically from the cart items.
* Memoises the Context provider value with `useMemo`.
* Uses `useMemo` for the filtered menu list.

## Project Structure

```text
src/
├── components/
│   ├── CartBadge.jsx
│   ├── CartProvider.jsx
│   ├── Checkout.jsx
│   └── Menu.jsx
│
├── hooks/
│   └── useFetch.js
│
├── css/
│   └── style.css
│
├── cartReducer.js
├── App.jsx
└── main.jsx

public/
└── dishes.json
```

## Custom Hook

### `useFetch.js`

The `useFetch` hook handles fetching menu data and provides:

* `data`
* `loading`
* `error`

It uses `AbortController` in the cleanup function to cancel the previous request when the component or URL changes.

## Cart Reducer

### `cartReducer.js`

The reducer is responsible for all cart state transitions:

* `add` — adds a dish to the cart.
* `remove` — removes a dish by its ID.
* `clear` — removes all items.

The reducer is kept pure and does not directly modify the existing state.

## Cart Context

### `CartProvider.jsx`

`CartProvider` uses `useReducer` to manage the cart and provides:

* `items`
* `dispatch`
* `total`

The total is derived from the cart items instead of being stored separately in the reducer.

The provider value is memoised with `useMemo` so the context value is not recreated unnecessarily when its dependencies have not changed.

## Components

### `Menu.jsx`

Fetches and displays the menu, handles category filtering, and dispatches the `add` action when a dish is added.

### `CartBadge.jsx`

Reads the cart directly from `CartContext` using `useContext` and displays the current number of items.

### `Checkout.jsx`

Reads the cart from context and displays the items, total, remove buttons, and clear cart functionality.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## React Concepts Used

This project demonstrates:

* Components and props
* `useState`
* `useEffect`
* `useContext`
* `useReducer`
* `useMemo`
* Custom hooks
* Fetching API data
* Loading and error handling
* `AbortController` cleanup
* Derived state
* Context instead of prop drilling
