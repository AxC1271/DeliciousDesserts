import React, { useState } from "react";
import "./RecipeFormModal.css";

const RecipeFormModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSave = () => {
    const newRecipe = {
      title,
      image,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    };
    onSave(newRecipe);
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Add New Recipe</h2>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Image URL:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <label>Ingredients (one per line):</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label>Instructions (one per line):</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RecipeFormModal;
