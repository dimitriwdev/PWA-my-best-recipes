import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
  let { id } = useParams();
  const { fetchRecipePageRecipes, recipe } = useContext(myContext);

  useEffect(() => {
    fetchRecipePageRecipes(id);
  }, [fetchRecipePageRecipes, id]);

  const instructions =
    recipe.strInstructions !== undefined
      ? recipe.strInstructions.split(/\r?\n/)
      : [];

  return (
    <div className="recipe">
      <div className="recipeHeader">
        <div className="recipeImgContainer">
          <img src={recipe.strMealThumb} alt="recipe" />
        </div>
        <div className="recipeTitle">
          <h2>{recipe.strMeal}</h2>
        </div>
      </div>
      <div className="recipeContent">
        <div className="recipeIngredients">
          <p>
            {recipe.strIngredient1
              ? '- ' + recipe.strIngredient1 + ': ' + recipe.strMeasure1
              : null}
          </p>
          <p>
            {recipe.strIngredient2
              ? '- ' + recipe.strIngredient2 + ': ' + recipe.strMeasure2
              : null}
          </p>
          <p>
            {recipe.strIngredient3
              ? '- ' + recipe.strIngredient3 + ': ' + recipe.strMeasure3
              : null}
          </p>
          <p>
            {recipe.strIngredient4
              ? '- ' + recipe.strIngredient4 + ': ' + recipe.strMeasure4
              : null}
          </p>
          <p>
            {recipe.strIngredient5
              ? '- ' + recipe.strIngredient5 + ': ' + recipe.strMeasure5
              : null}
          </p>
          <p>
            {recipe.strIngredient6
              ? '- ' + recipe.strIngredient6 + ': ' + recipe.strMeasure6
              : null}
          </p>
          <p>
            {recipe.strIngredient7
              ? '- ' + recipe.strIngredient7 + ': ' + recipe.strMeasure7
              : null}
          </p>
          <p>
            {recipe.strIngredient8
              ? '- ' + recipe.strIngredient8 + ': ' + recipe.strMeasure8
              : null}
          </p>
          <p>
            {recipe.strIngredient9
              ? '- ' + recipe.strIngredient9 + ': ' + recipe.strMeasure9
              : null}
          </p>
          <p>
            {recipe.strIngredient10
              ? '- ' + recipe.strIngredient10 + ': ' + recipe.strMeasure10
              : null}
          </p>
          <p>
            {recipe.strIngredient11
              ? '- ' + recipe.strIngredient11 + ': ' + recipe.strMeasure11
              : null}
          </p>
          <p>
            {recipe.strIngredient12
              ? '- ' + recipe.strIngredient12 + ': ' + recipe.strMeasure12
              : null}
          </p>
          <p>
            {recipe.strIngredient13
              ? '- ' + recipe.strIngredient13 + ': ' + recipe.strMeasure13
              : null}
          </p>
          <p>
            {recipe.strIngredient14
              ? '- ' + recipe.strIngredient14 + ': ' + recipe.strMeasure14
              : null}
          </p>
          <p>
            {recipe.strIngredient15
              ? '- ' + recipe.strIngredient15 + ': ' + recipe.strMeasure15
              : null}
          </p>
          <p>
            {recipe.strIngredient16
              ? '- ' + recipe.strIngredient16 + ': ' + recipe.strMeasure16
              : null}
          </p>
          <p>
            {recipe.strIngredient17
              ? '- ' + recipe.strIngredient17 + ': ' + recipe.strMeasure17
              : null}
          </p>
          <p>
            {recipe.strIngredient18
              ? '- ' + recipe.strIngredient18 + ': ' + recipe.strMeasure18
              : null}
          </p>
          <p>
            {recipe.strIngredient19
              ? '- ' + recipe.strIngredient19 + ': ' + recipe.strMeasure19
              : null}
          </p>
          <p>
            {recipe.strIngredient20
              ? '- ' + recipe.strIngredient20 + ': ' + recipe.strMeasure20
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

export default Recipes;
