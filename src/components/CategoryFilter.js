import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category.id}
          className={selectedCategory === category.id ? "selected" : ""}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
      <button
        key="all"
        className={selectedCategory === null ? "selected" : ""}
        onClick={() => onCategoryClick(null)}
      >
        All
      </button>
    </div>
  );
}

export default CategoryFilter;
