export function renderRecipe(recipe) {
  return `
    <article class="recipe">
              <img
                src="${recipe.image}"
                alt="${recipe.name}"
              />
              <div class="recipe-body">
                <h3 class="recipe-name text-lg">${recipe.name}</h3>
                <div class="recipe-information text-md">
                  <div class="recipe-data">
                    <img
                      src="/assets/clock.svg"
                      alt="clock"
                      class="icon"
                    />
                    <span>${recipe.time}</span>
                  </div>
                  <div class="recipe-data">
                    <img src="/assets/fire.svg" alt="fire" class="icon" />
                    <span>${recipe.calories}</span>
                  </div>
                  <div class="recipe-data">
                    <img src="/assets/star.svg" alt="star" class="icon" />
                    <span>${recipe.rating} (${recipe.review})</span>
                  </div>
                </div>
                <button class="btn text" data-id="${recipe.id}">View</button>
              </div>
            </article>
    `;
}

export function renderRecipeDetails(
  recipe,
  title,
  image,
  time,
  calories,
  rating,
  review,
  ingredients,
  instructions,
) {
  title.textContent = recipe.name;
  image.src = recipe.image;
  time.textContent = recipe.time;
  calories.textContent = recipe.calories;
  rating.textContent = `${recipe.rating} (${recipe.review})`;

  console.log(recipe.ingredients);

  ingredients.innerHTML = recipe.ingredients
    .map(
      (ingredient) => `
      <li>
        <label>
          <div class="check">
            <div class="inner"></div>
          </div>
          ${ingredient}
          <input type="checkbox" class="checkbox" />
        </label>
      </li>
    `,
    )
    .join("");

  instructions.innerHTML = recipe.instructions
    .map(
      (instruction, index) => `
      <li class="instructions-item">
        <span class="number">${index + 1}</span>
        <div class="text">${instruction}</div>
      </li>
    `,
    )
    .join("");
}
