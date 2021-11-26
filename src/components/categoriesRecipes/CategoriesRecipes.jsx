import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { Link, useParams } from 'react-router-dom';
import './CategoriesRecipes.css';
import bg from '../../assets/bg.webp';
// Photo by Lukas Blazek on Unsplash

const CategoriesRecipes = () => {
  let { categoryRecipe } = useParams();
  const { fetchCategoriesRecipes, categoriesRecipes } = useContext(myContext);
  let divStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    fetchCategoriesRecipes(categoryRecipe);
  }, [categoryRecipe, fetchCategoriesRecipes]);

  return (
    <div className="categoryRecipeContainer" style={divStyle}>
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
