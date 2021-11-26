import React, { useContext, useEffect } from 'react';
import { myContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './Categories.css';
import bg from '../../assets/bg.webp';
// Photo by Lukas Blazek on Unsplash

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);
  let divStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories" style={divStyle}>
      {categories.map((category) => (
        <Link
          to={/categories/ + category.strCategory}
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
