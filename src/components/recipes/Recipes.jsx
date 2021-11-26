import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import './Recipes.css';
import bg from '../../assets/bg.webp';
// Photo by Lukas Blazek on Unsplash

const Recipes = () => {
  let { id } = useParams();
  const { fetchRecipePageRecipes, recipe } = useContext(myContext);
  let divStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    fetchRecipePageRecipes(id);
  }, [fetchRecipePageRecipes, id]);

  const instructions =
    recipe.strInstructions !== undefined
      ? recipe.strInstructions.split('.')
      : [];

  return (
    <div className="recipe" style={divStyle}>
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
          <h3>Ingredients</h3>
          <div className="recipeIngredientsContainer">
            <ul className="recipeIngredients1">
              <li>
                {recipe.strIngredient1 ? (
                  <p>
                    {'- ' + recipe.strIngredient1 + ': '}{' '}
                    <span>{recipe.strMeasure1}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient2 ? (
                  <p>
                    {'- ' + recipe.strIngredient2 + ': '}{' '}
                    <span>{recipe.strMeasure2}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient3 ? (
                  <p>
                    {'- ' + recipe.strIngredient3 + ': '}{' '}
                    <span>{recipe.strMeasure3}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient4 ? (
                  <p>
                    {'- ' + recipe.strIngredient4 + ': '}{' '}
                    <span>{recipe.strMeasure4}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient5 ? (
                  <p>
                    {'- ' + recipe.strIngredient5 + ': '}{' '}
                    <span>{recipe.strMeasure5}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient6 ? (
                  <p>
                    {'- ' + recipe.strIngredient6 + ': '}{' '}
                    <span>{recipe.strMeasure6}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient7 ? (
                  <p>
                    {'- ' + recipe.strIngredient7 + ': '}{' '}
                    <span>{recipe.strMeasure7}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient8 ? (
                  <p>
                    {'- ' + recipe.strIngredient8 + ': '}{' '}
                    <span>{recipe.strMeasure8}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient9 ? (
                  <p>
                    {'- ' + recipe.strIngredient9 + ': '}{' '}
                    <span>{recipe.strMeasure9}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient10 ? (
                  <p>
                    {'- ' + recipe.strIngredient10 + ': '}{' '}
                    <span>{recipe.strMeasure10}</span>
                  </p>
                ) : null}
              </li>
            </ul>
            <ul className="recipeIngredients2">
              <li>
                {recipe.strIngredient11 ? (
                  <p>
                    {'- ' + recipe.strIngredient11 + ': '}{' '}
                    <span>{recipe.strMeasure11}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient12 ? (
                  <p>
                    {'- ' + recipe.strIngredient12 + ': '}{' '}
                    <span>{recipe.strMeasure12}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient13 ? (
                  <p>
                    {'- ' + recipe.strIngredient13 + ': '}{' '}
                    <span>{recipe.strMeasure13}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient14 ? (
                  <p>
                    {'- ' + recipe.strIngredient14 + ': '}{' '}
                    <span>{recipe.strMeasure14}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient15 ? (
                  <p>
                    {'- ' + recipe.strIngredient15 + ': '}{' '}
                    <span>{recipe.strMeasure15}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient16 ? (
                  <p>
                    {'- ' + recipe.strIngredient16 + ': '}{' '}
                    <span>{recipe.strMeasure16}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient17 ? (
                  <p>
                    {'- ' + recipe.strIngredient17 + ': '}{' '}
                    <span>{recipe.strMeasure17}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient18 ? (
                  <p>
                    {'- ' + recipe.strIngredient18 + ': '}{' '}
                    <span>{recipe.strMeasure18}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient19 ? (
                  <p>
                    {'- ' + recipe.strIngredient19 + ': '}{' '}
                    <span>{recipe.strMeasure19}</span>
                  </p>
                ) : null}
              </li>
              <li>
                {recipe.strIngredient20 ? (
                  <p>
                    {'- ' + recipe.strIngredient20 + ': '}{' '}
                    <span>{recipe.strMeasure20}</span>
                  </p>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <ul className="instructionsContainer">
          <h3>Instructions</h3>
          {instructions.map((instruction, index) => {
            return instruction ? (
              <li key={index} className="instructions">
                {'- ' + instruction}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
