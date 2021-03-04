import React from "react";
import Cocktail from "../Cocktail/Cocktail";
import Loader from "react-loader-spinner";
import "./CocktailList.css"




function CocktailList({ cocktails }) {
  if (cocktails.length === 0) {
    return <Loader
      margin-left="400px"
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}

    />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Sorry !There are no cocktails matched your search !!
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">List Coctails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
