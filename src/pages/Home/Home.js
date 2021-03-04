import React, { useState, useEffect } from "react";
import CocktailsList from "../../components/CocktailList/CocktailList";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => {

        const { drinks } = response.data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      })
      .catch((error) => console.log(error));

    setLoading(false);
  }, [searchTerm]);


  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  );
}

export default Home;
