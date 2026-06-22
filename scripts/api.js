const url = "https://dummyjson.com/recipes";

export async function fetchRecipes() {
  const response = await fetch(url);
  const data = await response.json();
  const recipes = data.recipes;

  return recipes.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      time: recipe.cookTimeMinutes,
      calories: recipe.caloriesPerServing,
      rating: recipe.rating,
      review: recipe.reviewCount,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    };
  });
}

export async function fetchRecipe(id) {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.image,
    ingredients: data.ingredients,
    instructions: data.instructions,
    time: data.cookTimeMinutes,
    calories: data.caloriesPerServing,
    rating: data.rating,
    review: data.reviewCount,
  };
}
