import { HfInference } from "@huggingface/inference";

// Use your actual API key
const HF_API_KEY = import.meta.env.VITE_HF_API_KEY; // For Vite-based React apps

export async function getARecipeFromMistral(ingredientsArr) {
    const SYSTEM_PROMPT = `You are an assistant. Suggest a recipe based on the given ingredients.`;

    // Initialize HfInference with the correct API key
    const hf = new HfInference(HF_API_KEY);

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3", // ✅ Correct model name
            provider: "together", // ✅ Specify the inference provider
            messages: [
                { role: "system", content: SYSTEM_PROMPT }, 
                { role: "user", content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe recommendation.` },
            ],
            max_tokens: 500, // ✅ Prevents excessive token usage
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching recipe:", error.message);
        return "Sorry, I couldn't generate a recipe at this time.";
    }
}



// import { HfInference } from "@huggingface/inference";
// import OpenAI from "openai"; // If using OpenAI

// const hf = new HfInference("hf_your_token");

// const openai = new OpenAI({ apiKey: "sk-YOUR-OPENAI-KEY" });

// export async function getARecipeFromMistral(ingredients) {
//     try {
//         // Attempt Hugging Face API first
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mistral-7B-Instruct-v0.3",
//             messages: [{ role: "user", content: `Give me a recipe with: ${ingredients.join(", ")}` }],
//             provider: "together", // Use Together AI if needed
//             max_tokens: 500
//         });
//         return response.choices[0].message.content;
//     } catch (error) {
//         console.error("Hugging Face API error:", error);

//         // Fallback to OpenAI if Hugging Face fails
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo", // Or GPT-4 if available
//             messages: [{ role: "user", content: `Give me a recipe with: ${ingredients.join(", ")}` }],
//             max_tokens: 500
//         });
//         return response.choices[0].message.content;
//     }
// }
