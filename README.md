# Recipe SPA

A modern Single Page Application (SPA) built with **HTML**, **CSS**, and **Vanilla JavaScript**. The application allows users to browse a collection of recipes and view detailed information without reloading the page.

## Features

- Browse a list of recipes
- View recipe details on a dedicated route
- Client-side routing using the History API
- Dynamic URL support (`/recipe/:id`)
- Browser Back and Forward button support
- Responsive layout
- Modular JavaScript architecture
- Deployed on Netlify with SPA routing support

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES Modules)
- History API
- Netlify

## Project Structure

```text
├── index.html
├── styles
│   ├── reset.css
│   ├── style.css
│   └── recipe.css
├── scripts
│   ├── api.js
│   ├── navigation.js
│   ├── renders.js
│   └── script.js
└── _redirects
```

## How It Works

### Fetching Data

The application loads recipe data from an external API when the page is initialized.

```javascript
const recipes = await fetchRecipes();
```

The data is fetched only once and stored in memory, avoiding unnecessary requests when navigating between pages.

---

### Rendering the Recipe List

After fetching the data, the recipe cards are generated dynamically and inserted into the DOM.

```javascript
recipesList.innerHTML = recipes.map(renderRecipe).join("");
```

Each card contains a button with a unique recipe ID stored in a `data-id` attribute.

---

### Event Delegation

Instead of attaching a click listener to every recipe card, the application uses event delegation.

```javascript
recipesList.addEventListener("click", (e) => {
  const button = e.target.closest(".btn");
  if (!button) return;

  const id = Number(button.dataset.id);
  showRecipeDetails(id);
});
```

This approach improves performance and keeps the code scalable.

---

### Client-Side Routing

The application implements a lightweight router using the History API.

When a recipe is selected:

```javascript
history.pushState({}, "", `/recipe/${id}`);
```

The URL changes without triggering a page reload.

Routes are parsed by a dedicated function:

```javascript
getRoute();
```

which returns an object describing the current page.

Example:

```javascript
{
  page: "recipe",
  id: 5
}
```

---

### Rendering Based on the Route

The `renderRoute()` function acts as the application's router controller.

It determines which section should be visible and renders the appropriate content.

```javascript
if (route.page === "home") {
  // Show recipe list
}

if (route.page === "recipe") {
  // Show recipe details
}
```

This separates navigation logic from rendering logic.

---

### Browser Navigation Support

The application listens for the browser's navigation events:

```javascript
window.addEventListener("popstate", renderRoute);
```

This ensures that Back and Forward buttons work correctly.

---

### Custom Route Change Events

A custom event is dispatched whenever navigation occurs programmatically.

```javascript
window.dispatchEvent(new Event("routechange"));
```

The application listens for this event and updates the UI accordingly.

---

### SPA Deployment on Netlify

Because the application uses client-side routing, Netlify must always serve `index.html` regardless of the requested URL.

The `_redirects` file contains:

```text
/* /index.html 200
```

This allows URLs such as:

```text
/
/recipe/1
/recipe/10
```

to work correctly even after a page refresh.

## What I Learned

This project was an opportunity to explore how modern frameworks work under the hood by implementing key SPA concepts from scratch:

- DOM manipulation
- Event delegation
- ES Modules
- History API
- Client-side routing
- Dynamic URL parameters
- Browser navigation handling
- SPA deployment strategies

Building these features without a framework provided a deeper understanding of how tools such as React Router, Vue Router, and Nuxt routing systems operate internally.

## Future Improvements

- Recipe search functionality
- Category filtering
- Favorites system
- Loading states and error handling
- Route-based code splitting
- Accessibility improvements
- Recipe persistence using Local Storage

## Author

Created by Daniele as a learning project to explore Single Page Application architecture using Vanilla JavaScript.
