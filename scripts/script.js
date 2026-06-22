import { fetchRecipes } from "./api.js";
import { getRoute, showIndex, showRecipeDetails } from "./navigation.js";
import { renderRecipe, renderRecipeDetails } from "./renders.js";

const homePage = document.getElementById("main-page");
const recipePage = document.getElementById("recipe-section");
const recipesList = document.querySelector(".recipes-list");
const homeLink = document.querySelector(".link-home");
const logo = document.querySelector(".logo-group");

const recipeName = document.querySelector(".recipe-title");
const recipeImage = document.querySelector(".image");
const recipeTime = document.querySelector("#time");
const recipeCalories = document.querySelector("#calories");
const recipeRating = document.querySelector("#rating");
const recipeIngredients = document.querySelector(".ingredients-list");
const recipeInstructions = document.querySelector(".instructions-list");

const recipes = await fetchRecipes();
recipesList.innerHTML = recipes.map(renderRecipe).join("");

homeLink.addEventListener("click", showIndex);
logo.addEventListener("click", showIndex);

recipesList.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const id = +btn.dataset.id;
  showRecipeDetails(id);
});

function renderRoute() {
  const route = getRoute();
  console.log(route);
  window.scrollTo({ top: 0 });

  if (route.page === "home") {
    homePage.hidden = false;
    recipePage.hidden = true;
    return;
  }

  if (route.page === "recipe") {
    const recipe = recipes.find((recipe) => recipe.id === route.id);

    if (!recipe) return;

    renderRecipeDetails(
      recipe,
      recipeName,
      recipeImage,
      recipeTime,
      recipeCalories,
      recipeRating,
      recipe.review,
      recipeIngredients,
      recipeInstructions,
    );

    homePage.hidden = true;
    recipePage.hidden = false;
  }
}
renderRoute();

window.addEventListener("popstate", renderRoute);
window.addEventListener("routechange", renderRoute);
