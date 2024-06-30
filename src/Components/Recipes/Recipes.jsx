import React, { useState, useEffect } from "react";
import Cake from "./Images/CutePixelCakes.png";
import BananaBread from "./Images/BananaBread.png";
import ChocolateChip from "./Images/ChocolateChipCookies.png";
import RecipeFormModal from "./RecipeFormModal";
import "./Recipes.css";

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
  },
];

const Recipes = ({ scrollToPercentage }) => {
  const [recipes, setRecipes] = useState(defaultRecipes);
  const [isNewFormOn, setIsNewFormOn] = useState(false);

  // Load recipes from local storage
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  // Save recipes to local storage whenever recipes state changes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Function to add a recipe
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
  };

  // Function to remove a recipe
  const removeRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <React.Fragment>
      <div className="table-of-contents">
        <h1 className="title">Table of Delicious Contents</h1>
        <div className="underline"></div>
        <img src={Cake} alt="" className="cake-logo" />
        <ol>
          {recipes.map((recipe, index) => (
            <li
              key={recipe.id}
              className="content"
              onClick={() => scrollToPercentage((index + 1) * 12.5)}
            >
              {recipe.title}
            </li>
          ))}
        </ol>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
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
            <button
              className="remove-recipe"
              onClick={() => removeRecipe(recipe.id)}
            >
              Remove Recipe
            </button>
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
  );
};

export default Recipes;
