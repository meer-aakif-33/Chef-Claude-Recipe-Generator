import React, { useState, useRef, useEffect } from "react";
import APIData from "../assets/data/RecipeCode.jsx"
import IngredientList from "./IngredientList";
import { getARecipeFromGemini } from "../assets/data/Ai.js";

const Main = () => {
    const [ingredientList, setIngredientList] = useState(["Coffee", "Water", "Sugar"]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false); // New loading state
    const recipeRef = useRef(null); // Reference for the recipe section
    const [showRecipe, setShowRecipe] = useState(false); // New state for animation

    function handleSubmit(event) {
        event.preventDefault(); // Prevent page refresh

        const formData = new FormData(event.currentTarget);
        let newIngredient = formData.get("ingredient").trim(); // Trim and normalize case

        if (!newIngredient) return; // Prevent adding empty ingredients

        // Format: Capitalize first letter, make others lowercase
        newIngredient = newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1).toLowerCase();

        setIngredientList((prevIngredients) => {
            if (prevIngredients.includes(newIngredient)) {
                alert("Ingredient already added!");
                return prevIngredients; // Return previous state without adding
            }
            return [...prevIngredients, newIngredient]; // Add new ingredient
        });

        event.currentTarget.reset(); // Clear input field after submission
    }

    async function getRecipe() {
        setLoading(true); // Show loading spinner
        setShowRecipe(false); // Hide previous recipe before generating a new one

        const recipeGenerated = await getARecipeFromGemini(ingredientList);
        setRecipe(recipeGenerated);
        setLoading(false); // Hide loading spinner

        // Slight delay before showing animation
        setTimeout(() => setShowRecipe(true), 100);
    }

    useEffect(() => {
        if (recipe && recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    const numberOfIngredients = ingredientList.length;

    return (
        <>
            <div className="main">
                <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input
                        type="text"
                        name="ingredient"
                        aria-label="Add ingredient"
                        placeholder="e.g. milk"
                    />
                    <button type="submit">Add ingredient</button>
                </form>
            </div>
            <IngredientList
                numberOfIngredients={numberOfIngredients}
                ingredientList={ingredientList}
                getRecipe={getRecipe}
            />

            {/* Show loading spinner when fetching recipe */}
            {loading && (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Generating your recipe...</p>
                </div>
            )}
            {recipe && !loading && (
                <div ref={recipeRef} className={`recipe-content ${showRecipe ? "show" : ""}`}>
                    <APIData recipe={recipe} />
                </div>
            )}
        </>
    );
};

export default Main;
