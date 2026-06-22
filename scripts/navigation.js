export function showRecipeDetails(id) {
  navigate(`recipe/${id}`);
}
export function showIndex() {
  navigate("/");
}

function getRecipeId() {
  return Number(location.pathname.split("/")[2]);
}

function navigate(url) {
  history.pushState({}, "", url);
  window.dispatchEvent(new Event("routechange"));
}

export function getRoute() {
  const path = location.pathname;
  if (path === "/") {
    return {
      page: "home",
    };
  }
  if (path.startsWith("/recipe/")) {
    return {
      page: "recipe",
      id: getRecipeId(),
    };
  }
  return {
    page: "not-found",
  };
}
