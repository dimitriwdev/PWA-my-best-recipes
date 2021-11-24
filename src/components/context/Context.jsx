import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesRecipes, setCategoriesRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);

  const fetchHomePageRecipes = useCallback((searchTerm) => {
    axios({
      method: 'get',
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
    })
      .then((res) => {
        setRecipes(res.data.meals);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const fetchRecipePageRecipes = useCallback((id) => {
    axios({
      method: 'get',
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, //52779
    })
      .then((res) => {
        setRecipe(res.data.meals[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    })
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const fetchCategoriesRecipes = useCallback((categoryRecipe) => {
    axios({
      method: 'get',
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryRecipe}`,
    })
      .then((res) => {
        setCategoriesRecipes(res.data.meals);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const fetchRandomRecipes = useCallback(() => {
    axios({
      method: 'get',
      url: 'https://www.themealdb.com/api/json/v1/1/random.php',
    })
      .then((res) => {
        setRandomRecipes(res.data.meals[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageRecipes,
        recipes,
        fetchRecipePageRecipes,
        recipe,
        fetchCategories,
        categories,
        fetchCategoriesRecipes,
        categoriesRecipes,
        fetchRandomRecipes,
        randomRecipes,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
