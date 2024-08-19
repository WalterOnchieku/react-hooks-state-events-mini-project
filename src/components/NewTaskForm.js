import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle input changes
  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskText && selectedCategory) {
      const newTask = {
        id: Date.now(), // Use a timestamp for a simple unique ID
        title: taskText,
        categoryId: selectedCategory,
        completed: false
      };

      onTaskFormSubmit(newTask);

      // Clear form inputs
      setTaskText("");
      setSelectedCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            category.id !== "all" && (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
