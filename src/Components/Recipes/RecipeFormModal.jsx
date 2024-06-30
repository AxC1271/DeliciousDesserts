import React, { useState } from 'react'
import './RecipeFormModal.css'

const RecipeFormModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")

  const handleSave = () => {
    onSave({
      title,
      image,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    })
    onClose()
  }

  return (
    <div className="modal-background show">
      <div className="modal">
        <h2>Add New Recipe</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Ingredients (one per line):
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Instructions (one per line):
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default RecipeFormModal
