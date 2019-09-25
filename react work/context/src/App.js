import React, { Component } from 'react';
import NavBar from './components/navbar';
import Books from './components/booklist';
import ThemeContextProvider from './context/themeContext';
import ThemeToggle from './components/themeToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <NavBar />
      <Books />
      <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
  
