import React, { FunctionComponent, useState, useEffect } from 'react';
import CocktailCard from '../components/cocktail-card';
import Cocktail from '../models/cocktail';

  
const CocktailList: FunctionComponent = () => {
  const [cocktail, setCocktails] = useState<Cocktail[]>([]);
  
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => response.json())
    .then((Cocktails) => {
        setCocktails(Cocktails.drinks)
    });
  }, []);
  
  return (





    <div>
      <h1 className="center">Cocktails</h1>
            
      <div className="container"> 
        <div className="row"> 
        {cocktail.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
        </div>
      </div>
    </div> 
  );
  
}
  
export default CocktailList;