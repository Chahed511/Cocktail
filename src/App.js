import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleCocktail from "./pages/SingleCocktail/SingleCocktail";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/cocktail/:id"  component={SingleCocktail} />
        <Route path="/*"  component={Error} />
         
      </Switch>
    </Router>
  );
}

export default App;