import { GoogleGenAI } from "@google/genai";

// Use your Vite environment variable
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getARecipeFromGemini(ingredientsArr) {
    const SYSTEM_PROMPT = `You are an assistant. Suggest a recipe based on the given ingredients.If multiple recipes are possible then suggest all for different combinations of ingredients`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // You can choose another Gemini model
            contents: `${SYSTEM_PROMPT} I have ${ingredientsArr.join(", ")}. Please give me a recipe recommendation.`,
        });

        return response.text;
    } catch (error) {
        console.error("Error fetching recipe:", error.message);
        return "Sorry, I couldn't generate a recipe at this time.";
    }
}
