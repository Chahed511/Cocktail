
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./SingleCocktail.css"

function SingleCocktail() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        if (response.data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strAlcoholic: info,
          } = response.data.drinks[0];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,

          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      })

      .catch((error) => console.log(error));

    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loader
    margin-left="400px"
    type="TailSpin"
    color="#00BFFF"
    height={80}
    width={80}
    timeout={3000}

  />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category}</p>
            <p>info : {info}</p>
            <p>glass : {glass}</p>
            <p>instructions: {instructions}</p>

          </div>
        </div>
      </section>
    );
  }
}

export default SingleCocktail;
