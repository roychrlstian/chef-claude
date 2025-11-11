import { useState } from "react";

export default function Add() {
    const [myIngredients, setMyIngredients] = useState([]);

    const ingredients = myIngredients.map(ing => <li key={ing}>{ing}</li>)

    function handleSubmit(event) {
        event.preventDefault();
        const ingredients = event.currentTarget;
        const formData = new FormData(ingredients);
        const newIngredient = formData.get("ingredient");
        setMyIngredients(prev => [...prev, newIngredient]);
        ingredients.reset()
    }
    
    return (
    <main>
        <form className="add-container" onSubmit={handleSubmit}>
            <input className="inputAdd" type="text" placeholder="e.g. garlic" name="ingredient" />
            <button type="submit" className="buttonAdd">+ Add ingredient</button>
        </form>
        <ul>
            {ingredients}
        </ul>
    </main>
    );
}