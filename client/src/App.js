import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Nav />
      <Books />
      <Saved />
      <Search />
    </div>
  );
}

export default App;

