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
      ? randomRecipes.strInstructions.split('.') // /\r?\n/
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
        <div className="recipeIngredientsContainer">
          <ul className="recipeIngredients1">
            <li>
              {randomRecipes.strIngredient1 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient1 + ': '}{' '}
                  <span>{randomRecipes.strMeasure1}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient2 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient2 + ': '}{' '}
                  <span>{randomRecipes.strMeasure2}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient3 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient3 + ': '}{' '}
                  <span>{randomRecipes.strMeasure3}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient4 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient4 + ': '}{' '}
                  <span>{randomRecipes.strMeasure4}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient5 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient5 + ': '}{' '}
                  <span>{randomRecipes.strMeasure5}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient6 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient6 + ': '}{' '}
                  <span>{randomRecipes.strMeasure6}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient7 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient7 + ': '}{' '}
                  <span>{randomRecipes.strMeasure7}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient8 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient8 + ': '}{' '}
                  <span>{randomRecipes.strMeasure8}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient9 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient9 + ': '}{' '}
                  <span>{randomRecipes.strMeasure9}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient10 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient10 + ': '}{' '}
                  <span>{randomRecipes.strMeasure10}</span>
                </p>
              ) : null}
            </li>
          </ul>
          <ul className="recipeIngredients2">
            <li>
              {randomRecipes.strIngredient11 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient11 + ': '}{' '}
                  <span>{randomRecipes.strMeasure11}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient12 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient12 + ': '}{' '}
                  <span>{randomRecipes.strMeasure12}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient13 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient13 + ': '}{' '}
                  <span>{randomRecipes.strMeasure13}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient14 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient14 + ': '}{' '}
                  <span>{randomRecipes.strMeasure14}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient15 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient15 + ': '}{' '}
                  <span>{randomRecipes.strMeasure15}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient16 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient16 + ': '}{' '}
                  <span>{randomRecipes.strMeasure16}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient17 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient17 + ': '}{' '}
                  <span>{randomRecipes.strMeasure17}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient18 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient18 + ': '}{' '}
                  <span>{randomRecipes.strMeasure18}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient19 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient19 + ': '}{' '}
                  <span>{randomRecipes.strMeasure19}</span>
                </p>
              ) : null}
            </li>
            <li>
              {randomRecipes.strIngredient20 ? (
                <p>
                  {'- ' + randomRecipes.strIngredient20 + ': '}{' '}
                  <span>{randomRecipes.strMeasure20}</span>
                </p>
              ) : null}
            </li>
          </ul>
        </div>
        <ul className="instructionsContainer">
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
