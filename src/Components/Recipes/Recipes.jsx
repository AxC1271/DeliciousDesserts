import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore'
import { db } from '../Firebase/firebase'
import Cake from './Images/CutePixelCakes.png'
import BananaBread from './Images/BananaBread.png'
import ChocolateChip from './Images/ChocolateChipCookies.png'
import RecipeFormModal from './RecipeFormModal'
import './Recipes.css'

const defaultRecipes = [
  {
    id: 1,
    title: "Banana Bread",
    image: BananaBread,
    ingredients: [
      "3 ripe bananas",
      "1/3 cup butter, melted",
      "1/2 cup sugar",
      "1 large egg, beaten",
      "1 teaspoon vanilla extract",
      "1 teaspoon baking soda",
      "salt, to taste",
      "1 1/2 cups flour",
      "1/2 cup mini chocolate chips",
    ],
    instructions: [
      "Preheat the oven to 350 degrees Fahrenheit",
      "Mash the bananas in a large bowl until smooth",
      "Pour melted butter into the bananas, stir until consistent",
      "Add sugar, egg, vanilla extract, baking soda, salt, and flour and mix thoroughly",
      "Add chocolate chips into the flour mix and stir",
      "Bake in the oven for at least 50 minutes to an hour",
      "Enjoy!",
    ],
    isDefault: true,
    timestamp: new Date(0) // Assign an early timestamp to default recipes
  },
  {
    id: 2,
    title: "Chocolate Chip Cookies",
    image: ChocolateChip,
    ingredients: [
      "1/2 cup melted butter",
      "2/3 cup brown sugar",
      "1/3 cup sugar",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1 1/3 cup flour",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 cup semi-sweet chocolate chips",
    ],
    instructions: [
      "Mix brown sugar, sugar, and melted butter until smooth",
      "Add egg and vanilla and whisk until silky",
      "Stir in flour, baking soda, and salt",
      "Fold in semi-sweet chocolate chips. Cover bowl in plastic wrap and chill in the refrigerator for at least 30 minutes",
      "When ready to bake, preheat the oven to 350 degrees",
      "Use cookie parchment paper on a large metal tray",
      "Create cookie balls approx. 1 inch in diameter and place them evenly",
      "Bake for 10-13 minutes or until cookies become a light golden color",
      "Enjoy!",
    ],
    isDefault: true,
    timestamp: new Date(0) // Assign an early timestamp to default recipes
  },
]

const Recipes = () => {
  const [recipes, setRecipes] = useState([]) // Initialize with an empty array
  const [isNewFormOn, setIsNewFormOn] = useState(false)
  const recipeRefs = useRef({})

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesQuery = query(collection(db, "recipes"), orderBy("timestamp", "asc"))
        const querySnapshot = await getDocs(recipesQuery)
        const fetchedRecipes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        // Filter out default recipes from fetched recipes
        const userAddedRecipes = fetchedRecipes.filter(
          (recipe) => !recipe.isDefault
        )
        setRecipes([...defaultRecipes, ...userAddedRecipes])
      } catch (error) {
        console.error("Error fetching recipes:", error)
        // You can choose to handle error state or logging here
      }
    }
    fetchRecipes() // Fetch recipes when component mounts
  }, [])

  const addRecipe = async (newRecipe) => {
    try {
      const recipeWithTimestamp = {
        ...newRecipe,
        timestamp: new Date(),
      }
      const docRef = await addDoc(collection(db, "recipes"), recipeWithTimestamp)
      console.log("Document written with ID: ", docRef.id)
      
      // Update local state with the new recipe, append it
      const recipeWithId = { id: docRef.id, ...recipeWithTimestamp }
      setRecipes(prevRecipes => [...prevRecipes, recipeWithId])
    } catch (error) {
      console.error("Error adding recipe:", error)
    }
  }

  const removeRecipe = async (id) => {
    try {
      await deleteDoc(doc(db, "recipes", id))
      setRecipes(recipes.filter((recipe) => recipe.id !== id))
    } catch (error) {
      console.error("Error removing recipe:", error)
    }
  };

  const scrollToRecipe = (id) => {
    const recipeElement = recipeRefs.current[id]
    if (recipeElement) {
      recipeElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <React.Fragment>
      <div className="table-of-contents">
        <h1 className="title">Table of Delicious Contents</h1>
        <div className="underline"></div>
        <img src={Cake} alt="" className="cake-logo" />
        <ol>
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="content"
              onClick={() => scrollToRecipe(recipe.id)}
            >
              {recipe.title}
            </li>
          ))}
        </ol>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe.id} ref={(el) => (recipeRefs.current[recipe.id] = el)}>
          <div className="line-container">
            <h2>{recipe.title}</h2>
            <div className="line"></div>
          </div>
          <div className="recipe-card">
            <h1 className="title">{recipe.title}</h1>
            <div className="underline"></div>
            <img src={recipe.image} alt="" className="bake-logo" />
            <p className="descriptor">Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="content">
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="descriptor">Instructions:</p>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction">
                  {instruction}
                </li>
              ))}
            </ol>
            {!recipe.isDefault && (
              <button
                className="remove-recipe"
                onClick={() => removeRecipe(recipe.id)}
              >
                Remove Recipe
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="add-recipe-container">
        <button className="add-recipe" onClick={() => setIsNewFormOn(true)}>
          Add New Recipe
        </button>
      </div>
      {isNewFormOn && (
        <RecipeFormModal
          onClose={() => setIsNewFormOn(false)}
          onSave={addRecipe}
        />
      )}
    </React.Fragment>
  )
}

export default Recipes

