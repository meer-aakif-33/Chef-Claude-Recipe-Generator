# Recipe Generator

## Overview
The **Recipe Generator** is a React-based web application that allows users to input ingredients they have on hand and generate a recipe using AI. The app ensures a smooth user experience with real-time ingredient management and interactive recipe generation.

## Features
- **Ingredient Management:** Users can add ingredients dynamically.
- **Duplicate Prevention:** The app prevents duplicate ingredient entries.
- **AI-Powered Recipe Generation:** Uses an AI model to generate recipes based on available ingredients.
- **Smooth Animations & Transitions:** Includes animations when generating recipes.
- **Loading Indicator:** Displays a spinner while the recipe is being generated.
- **Automatic Scrolling:** Scrolls to the generated recipe after fetching.

## Preview
![Image](https://github.com/user-attachments/assets/5ad8a974-9d06-4792-a43e-c40c2ed2beec)

![Image](https://github.com/user-attachments/assets/0c710b07-7bf9-4494-a510-9e07e807d24a)

## Components
### `IngHeader`
- Displays the app logo and title.

### `Footer`
- Simple footer component.

### `IngredientList`
- Renders a list of user-added ingredients.
- Displays a call-to-action when enough ingredients are present.
- Provides a button to generate a recipe.

### `Main`
- Handles ingredient input and management.
- Manages the recipe generation process.
- Implements state handling for ingredients, recipe loading, and UI effects.

## How It Works
1. Users enter ingredients into the input field and submit them.
2. The ingredient list updates dynamically.
3. Once enough ingredients are added, users can generate a recipe.
4. The app fetches a recipe from `getARecipeFromMistral` and displays it with animations.
5. The page scrolls smoothly to the generated recipe.

## Setup & Installation
### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/recipe-generator.git
   cd recipe-generator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS for styling

## Future Improvements
- Implement authentication to save user preferences.
- Add more AI models for enhanced recipe generation.
- Improve UI/UX with better animations and styling.

## License
This project is open-source and available under the [MIT License](LICENSE).

