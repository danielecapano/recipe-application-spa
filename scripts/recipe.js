import { fetchRecipe } from "./api.js";
import { renderRecipeDetails } from "./renders.js";

const params = new URLSearchParams(location.search);

const id = params.get("id");

const recipeName = document.querySelector(".recipe-title");
const recipeImage = document.querySelector(".image");
const recipeTime = document.querySelector("#time");
const recipeCalories = document.querySelector("#calories");
const recipeRating = document.querySelector("#rating");
const recipeIngredients = document.querySelector(".ingredients-list");
const recipeInstructions = document.querySelector(".instructions-list");

const url = "https://dummyjson.com/recipes";

const recipe = await fetchRecipe(id);

console.log(recipeIngredients);
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
