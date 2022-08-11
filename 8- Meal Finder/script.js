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

// Fetch random meal
const getRandomMeal = () => {
  mealsEl.innerHTML = ""
  single_mealEl.innerHTML = ""
  resultHeading.innerHTML = ""

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const meal = data.meals[0]
      addMealToDOM(meal)
    })
}

// Fetch meal by ID
const getMealById = (mealID) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const meal = data.meals[0]

      addMealToDOM(meal)
    })
}

// Add meal to DOM
const addMealToDOM = (meal) => {
  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]}  ${meal[` - strMeasure${i}`]}`
      )
    } else {
      break
    }
  }
  single_mealEl.innerHTML = `
  <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
        ${meal.strCategory ? `<p>Category: ${meal.strCategory}</p>` : ""}
        ${meal.strArea ? `<p>Area: ${meal.strArea}</p>` : ""}
    </div>
    <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
            ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
    </div>
  </div>
  `
}

// Event Listeners
submit.addEventListener("submit", searchMeal)
random.addEventListener("click", getRandomMeal)

mealsEl.addEventListener("click", (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info")
    } else {
      return false
    }
  })
  //   console.log(mealInfo)
  if (mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealid")
    getMealById(mealID)
  }
})
