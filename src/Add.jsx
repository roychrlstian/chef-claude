import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

export default function Add() {
    const [myIngredients, setMyIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    const ingredients = myIngredients.map(ing => <li key={ing}>{ing}</li>)
    const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or 
    all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't 
    mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

    async function getRecipe() {
        const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
        const userMessage = `Here are my ingredients:\n${myIngredients.join("\n")}\n\nPlease suggest a recipe.`;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userMessage,
            config: {
                systemInstruction: SYSTEM_PROMPT
            }
        });
        setRecipe(response.text);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if(newIngredient && !myIngredients.includes(newIngredient)) {
            setMyIngredients(prevRecipe => [...prevRecipe, newIngredient]);
        }
    }
    
    return (
    <main>
        <form action={addIngredient} className="add-container">
            <input className="inputAdd" type="text" placeholder="e.g. garlic" name="ingredient" />
            <button type="submit" className="buttonAdd">+ Add ingredient</button>
        </form>

        <ul className="ingredients-list">
            {ingredients}
        </ul>

        {myIngredients.length > 3 &&
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>
        }
    
        {recipe && 
            <section className="suggested-recipe-container">
                <h2>Chef Claude Recommends:</h2>
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </section>
        }
    </main>
    );
}