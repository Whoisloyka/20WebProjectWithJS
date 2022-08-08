const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("results-heading"),
  single_mealEl = document.getElementById("single-meal")

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault()

  // Clear single meal
  single_mealEl.innerHTML = ""

  // Get search term
  const term = search.value

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`
        if (data.meals != null) {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
          <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
            </div>
          </div>
          `
            )
            .join("")
          // Clear search text
          search.value = ""
        } else {
          resultHeading.innerHTML = `<h2>There is no results. Try again!</h2>`
        }
      })
  } else {
    alert("Please enter a search term")
  }
}

// Event Listeners
submit.addEventListener("submit", searchMeal)
