import React from 'react'

import Cake from './Images/CutePixelCakes.png'
import BananaBread from './Images/BananaBread.png'
import Molasses from './Images/MolassesCookies.png'
import ChocolateChip from './Images/ChocolateChipCookies.png'
import PumpkinBread from './Images/PumpkinBread.png'

import './Recipes.css'


 
const Recipes = ({ scrollToPercentage }) => {
    return (
        <React.Fragment>
            <div className="table-of-contents">
                <h1 className="title">Table of Delicious Contents</h1>
                <div className="underline"></div>
                <img src={Cake} alt="" className="cake-logo" />
                <ol>
                    <li className="content" onClick={() => scrollToPercentage(12.5)}>Banana Bread</li>
                    <li className="content"  onClick={() => scrollToPercentage(34)}>Molasses Cookies</li>
                    <li className="content"  onClick={() => scrollToPercentage(56)}>Chocolate Chip Cookies</li>
                    <li className="content"  onClick={() => scrollToPercentage(79)}>Delicious Pumpkin Bread</li>
                </ol>
            </div>
            <div className="line-container">
                <h2>1. Banana Bread</h2>
                <div className="line"></div>
            </div>
            <div className="recipe-card">
                <h1 className="title">Banana Bread</h1>
                <div className="underline"></div>
                <img src={BananaBread} alt="" className="bake-logo" />
                <p className="descriptor">Ingredients (6 servings):</p>
                <ul>
                    <li className="content">3 ripe bananas</li>
                    <li className="content">1/3 cup butter, melted</li>
                    <li className="content">1/2 cup sugar</li>
                    <li className="content">1 large egg, beaten</li>
                    <li className="content">1 teaspoon vanilla extract</li>
                    <li className="content">1 teaspoon baking soda</li>
                    <li className="content">salt, to taste</li>
                    <li className="content">1 1/2 cups flour</li>
                    <li className="content">1/2 cup mini chocolate chips</li>
                </ul>
                <p className="descriptor">Instructions:</p>
                <ol>
                    <li className="instruction">Preheat the oven to 350 degrees Fahrenheit</li>
                    <li className="instruction">Mash the bananas in a large bowl until smooth</li>
                    <li className="instruction">Pour melted butter into the bananas, stir until consistent</li>
                    <li className="instruction">Add sugar, egg, vanilla extract, baking soda, salt, and flour and mix thoroughly</li>
                    <li className="instruction">Add chocolate chips into the flour mix and stir</li>
                    <li className="instruction">Bake in the oven for at least 50 minutes to an hour</li>
                    <li className="instruction">Enjoy!</li>
                </ol>
            </div>
            <div className="line-container">
                <h2>2. Molasses Cookies</h2>
                <div className="line"></div>
            </div>
            <div className="recipe-card">
                <h1 className="title">Molasses Cookies</h1>
                <div className="underline"></div>
                <img src={Molasses} alt="" className="bake-logo" />
                <p className="descriptor">Ingredients (1 serving):</p>
                <ul>
                    <li className="content">3/4 cups shortening</li>
                    <li className="content">1 cup sugar</li>
                    <li className="content">1/4 cup molasses</li>
                    <li className="content">1 large egg</li>
                    <li className="content">2 cups flour</li>
                    <li className="content">2 teaspoons baking soda</li>
                    <li className="content">1 teaspoon cinnamon</li>
                    <li className="content">1/2 teaspoon cloves</li>
                    <li className="content">1/2 teaspoon ginger</li>
                    <li className="content">1/2 teaspoon salt</li>
                </ul>
                <p className="descriptor">Instructions:</p>
                <ol>
                    <li className="instruction">Preheat the oven to 375 degrees Fahrenheit</li>
                    <li className="instruction">Melt the shortening and let it cool slightly</li>
                    <li className="instruction">Add sugar and molasses and beat well</li>
                    <li className="instruction">Add the egg and mix together the dry ingredients and beat into molasses mixture</li>
                    <li className="instruction">Form the dough into a 1-inch ball</li>
                    <li className="instruction">Bake in the oven for 8-10 minutes</li>
                    <li className="instruction">Enjoy!</li>
                </ol>
            </div>
            <div className="line-container">
                <h2>3. Chocolate Chip Cookies</h2>
                <div className="line"></div>
            </div>
            <div className="recipe-card">
                <h1 className="title">Chocolate Chip Cookies</h1>
                <div className="underline"></div>
                <img src={ChocolateChip} alt="" className="bake-logo" />
                <p className="descriptor">Instructions (20 servings):</p>
                <ul>
                    <li className="content">1/2 cup melted butter</li>
                    <li className="content">2/3 cup brown sugar</li>
                    <li className="content">1/3 cup sugar</li>
                    <li className="content">1 large egg</li>
                    <li className="content">1 teaspoon vanilla extract</li>
                    <li className="content">1 1/3 cup flour</li>
                    <li className="content">1/2 teaspoon baking soda</li>
                    <li className="content">1/2 teaspoon salt</li>
                    <li className="content">1/2 cup semi-sweet chocolate chips</li>
                </ul>
                <p className="descriptor">Instructions:</p>
                <ol>
                    <li className="instruction">Mix brown sugar, sugar, and melted butter until smooth</li>
                    <li className="instruction">Add egg and vanilla and whisk until silky</li>
                    <li className="instruction">Stir in flour, baking soda, and salt</li>
                    <li className="instruction">Fold in semi-sweet chocolate chips. Cover bowl in plastic wrap and chill in the refrigerator for at least 30 minutes</li>
                    <li className="instruction">When ready to bake, preheat the oven to 350 degrees</li>
                    <li className="instruction">Use cookie parchment paper on a large metal tray</li>
                    <li className="instruction">Create cookie balls approx. 1 inch in diameter and place them evenly</li>
                    <li className="instruction">Bake for 10-13 minutes or until cookies become a light golden color</li>
                    <li className="instruction">Enjoy!</li>
                </ol>
            </div>
            <div className="line-container">
                <h2>4. Pumpkin Bread</h2>
                <div className="line"></div>
            </div>
            <div className="recipe-card">
                <h1 className="title">Pumpkin Bread</h1>
                <div className="underline"></div>
                <img src={PumpkinBread} alt="" className="bake-logo" />
                <p className="descriptor">Ingredients (5 servings):</p>
                <ul>
                    <li className="content">5 eggs</li>
                    <li className="content">1 - 1 1/4 cups vegetable oil</li>
                    <li className="content">1 can (15 ounces) solid-pack pumpkin</li>
                    <li className="content">2 cups all-purpose flour</li>
                    <li className="content">2 cups sugar</li>
                    <li className="content">2 packages (3 ounces each) cook-and-serve vanilla pudding mix</li>
                    <li className="content">1 teaspoon baking soda</li>
                    <li className="content">1 teaspoon ground cinnamon</li>
                    <li className="content">1 teaspoon salt</li>
                </ul>
                <p className="descriptor">Instructions:</p>
                <ol>
                    <li className="instruction">In a large mixing bowl, beat the eggs until uniform</li>
                    <li className="instruction">Add oil and pumpkin and beat until smooth</li>
                    <li className="instruction">Add the rest of the ingredients while gradually beating it into pumpkin mixture</li>
                    <li className="instruction">Pour batter into five greased 5-in. x 2 1/2-in. x 2-in. loaf pans</li>
                    <li className="instruction">Bake at 325 degrees Fahrenheit for 50-55 minutes or until a toothpick inserted near the center comes out clean</li>
                    <li className="instruction">Cool on wire racks before serving</li>
                    <li className="instruction">Enjoy!</li>
                </ol>
            </div>
        </React.Fragment>
    )
}

export default Recipes