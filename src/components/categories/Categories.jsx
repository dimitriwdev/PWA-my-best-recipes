import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <Link
          to={/category/ + category.strCategory}
          key={category.idCategory}
          className="categoryCard"
        >
          <img src={category.strCategoryThumb} alt="category" />
          <h4>{category.strCategory}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
