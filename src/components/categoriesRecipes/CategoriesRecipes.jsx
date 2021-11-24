import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { Link, useParams } from 'react-router-dom';
import './CategoriesRecipes.css';

const CategoriesRecipes = () => {
  let { categoryRecipe } = useParams();
  const { fetchCategoriesRecipes, categoriesRecipes } = useContext(myContext);

  useEffect(() => {
    fetchCategoriesRecipes(categoryRecipe);
  }, [categoryRecipe, fetchCategoriesRecipes]);

  return (
    <div className="categoryRecipeContainer">
      {categoriesRecipes ? (
        categoriesRecipes.map((categoriesRecipe) => (
          <Link
            to={/recipe/ + categoriesRecipe.idMeal}
            key={categoriesRecipe.idMeal}
            className="categoryRecipeCard"
          >
            <img src={categoriesRecipe.strMealThumb} alt="recipe" />
            <h4>{categoriesRecipe.strMeal}</h4>
          </Link>
        ))
      ) : (
        <h2>No recipes found</h2>
      )}
    </div>
  );
};

export default CategoriesRecipes;
