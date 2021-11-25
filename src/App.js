import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/homePage/Home';
import Recipes from './components/recipes/Recipes';
import Categories from './components/categories/Categories';
import CategoriesRecipes from './components/categoriesRecipes/CategoriesRecipes';
import RandomRecipe from './components/randomRecipe/RandomRecipe';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipe/:id" element={<Recipes />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route
            exact
            path="/category/:categoryRecipe"
            element={<CategoriesRecipes />}
          />
          <Route exact path="/random-recipe" element={<RandomRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
