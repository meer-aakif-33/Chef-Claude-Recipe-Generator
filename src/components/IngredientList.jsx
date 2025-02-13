import React from 'react'
const IngredientList = (props) => {
    const array = props.ingredientList.map((ingredient, index) => {
      return (
        <div key={ingredient + index}>
          <li style={{ color: "#475467", lineHeight: "28px" }}>{ingredient}</li>
        </div>
      );
    });
  
  return (
    <>
        {props.numberOfIngredients > 0 && (
        <section>
          <div className="ingredient-item-section">
            <h2 style={{ color: "#141413", lineHeight: "38px" }}>
              Ingredients on hand
            </h2>
            <ul className="ingredient-list">{array}</ul>
          </div>
          {props.numberOfIngredients > 3 && (
            <div className="get-recipe-container">
              <div className="get-recipe-container-left-part">
                <h3>Ready for a recipe</h3>
                <p style={{ color: "#6B7280", lineHeight: "20px" }}>
                  Generate a recipe from your favorite list of ingredients.
                </p>
              </div>
              <div>
                <button className="get-a-recipe-btn" onClick={props.getRecipe}>Get a recipe</button>
              </div>
            </div>
          )}
        </section>
      )}</>
  )
}

export default IngredientList
