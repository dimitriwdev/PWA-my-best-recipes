import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import './RandomRecipe.css';

const RandomRecipe = () => {
  const { fetchRandomRecipes, randomRecipes } = useContext(myContext);

  useEffect(() => {
    fetchRandomRecipes();
  }, [fetchRandomRecipes]);

  const instructions =
    randomRecipes.strInstructions !== undefined
      ? randomRecipes.strInstructions.split(/\r?\n/)
      : [];

  return (
    <div className="randomRecipe">
      <div className="randomRecipeHeader">
        <div className="randomRecipeImgContainer">
          <img src={randomRecipes.strMealThumb} alt="recipe" />
        </div>
        <div className="randomRecipeTitleBtn">
          <h2>{randomRecipes.strMeal}</h2>
          <button onClick={fetchRandomRecipes}>Generate other recipe</button>
        </div>
      </div>
      <div className="recipeContent">
        <div className="recipeIngredients">
          <p>
            {randomRecipes.strIngredient1
              ? '- ' +
                randomRecipes.strIngredient1 +
                ': ' +
                randomRecipes.strMeasure1
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient2
              ? '- ' +
                randomRecipes.strIngredient2 +
                ': ' +
                randomRecipes.strMeasure2
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient3
              ? '- ' +
                randomRecipes.strIngredient3 +
                ': ' +
                randomRecipes.strMeasure3
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient4
              ? '- ' +
                randomRecipes.strIngredient4 +
                ': ' +
                randomRecipes.strMeasure4
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient5
              ? '- ' +
                randomRecipes.strIngredient5 +
                ': ' +
                randomRecipes.strMeasure5
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient6
              ? '- ' +
                randomRecipes.strIngredient6 +
                ': ' +
                randomRecipes.strMeasure6
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient7
              ? '- ' +
                randomRecipes.strIngredient7 +
                ': ' +
                randomRecipes.strMeasure7
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient8
              ? '- ' +
                randomRecipes.strIngredient8 +
                ': ' +
                randomRecipes.strMeasure8
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient9
              ? '- ' +
                randomRecipes.strIngredient9 +
                ': ' +
                randomRecipes.strMeasure9
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient10
              ? '- ' +
                randomRecipes.strIngredient10 +
                ': ' +
                randomRecipes.strMeasure10
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient11
              ? '- ' +
                randomRecipes.strIngredient11 +
                ': ' +
                randomRecipes.strMeasure11
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient12
              ? '- ' +
                randomRecipes.strIngredient12 +
                ': ' +
                randomRecipes.strMeasure12
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient13
              ? '- ' +
                randomRecipes.strIngredient13 +
                ': ' +
                randomRecipes.strMeasure13
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient14
              ? '- ' +
                randomRecipes.strIngredient14 +
                ': ' +
                randomRecipes.strMeasure14
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient15
              ? '- ' +
                randomRecipes.strIngredient15 +
                ': ' +
                randomRecipes.strMeasure15
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient16
              ? '- ' +
                randomRecipes.strIngredient16 +
                ': ' +
                randomRecipes.strMeasure16
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient17
              ? '- ' +
                randomRecipes.strIngredient17 +
                ': ' +
                randomRecipes.strMeasure17
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient18
              ? '- ' +
                randomRecipes.strIngredient18 +
                ': ' +
                randomRecipes.strMeasure18
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient19
              ? '- ' +
                randomRecipes.strIngredient19 +
                ': ' +
                randomRecipes.strMeasure19
              : null}
          </p>
          <p>
            {randomRecipes.strIngredient20
              ? '- ' +
                randomRecipes.strIngredient20 +
                ': ' +
                randomRecipes.strMeasure20
              : null}
          </p>
        </div>
        <ul className="InstructionsContainer">
          {instructions.map((instruction, index) => {
            return instruction ? (
              <li key={index} className="instructions">
                {instruction}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RandomRecipe;
