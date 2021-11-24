import React, { useContext, useCallback, useState } from 'react';
import { myContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { fetchHomePageRecipes, recipes } = useContext(myContext);

  const handleFetchRecipe = useCallback(
    (e) => {
      e.preventDefault();
      fetchHomePageRecipes(searchTerm);
      setSearchTerm('');
    },
    [searchTerm, fetchHomePageRecipes]
  );

  return (
    <div className="home">
      <form className="homeSearch" onSubmit={handleFetchRecipe}>
        <input
          className="homeSearchInput"
          type="text"
          placeholder="Enter a recipe name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="homeSearchBtn" type="submit" value="Search recipe">
          Search recipe
        </button>
      </form>
      <div className="homeRecipeContainer">
        {recipes ? (
          recipes.map((recipe) => (
            <Link
              to={/recipe/ + recipe.idMeal}
              key={recipe.idMeal}
              className="homeRecipeCard"
            >
              <img src={recipe.strMealThumb} alt="recipe" />
              <h4>{recipe.strMeal}</h4>
            </Link>
          ))
        ) : (
          <h2>No recipes found</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
