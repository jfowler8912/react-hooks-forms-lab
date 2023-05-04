import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter"

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState('')

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function onItemFormSubmit (newItem) {
    setItems([...items, newItem])
    console.log(newItem)
  }

  

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
      search={search} 
      items={items} 
      onSearchChange={handleSearch}
      onItemFormSubmit={onItemFormSubmit}
      />
    </div>
  );
}

export default App;
