
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Foods from "./components/Foods";
import Categories from "./components/Categorie";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Foods/>
      <Categories/>
    </div>
  );
}

export default App;
