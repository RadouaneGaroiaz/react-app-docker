
import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Cocktail from '../models/cocktail';


  
type Params = { id: string };
  
const CocktailsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [cocktail, setCocktail] = useState<Cocktail[]>([]);
  


  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
    .then(response => response.json())
    .then(cocktail => {
        if(cocktail.drinks)
        setCocktail(cocktail.drinks)
    });
  }, [match.params.id]);
    
  return (
    <div>

      
    {cocktail.map((drink)  => {
      const {idDrink, strDrink,strDrinkThumb,strCategory,strGlass,strAlcoholic,strInsructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,} = drink;
      
      return(
        
        <div className='row'>
          <div className='col s12 m8 offset-m2'>
            <h2 className='header center'>{drink.strDrink}</h2>
            <div className='card hoverable'>
              <div className='card-image'>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{width:'250px', margin:'0 auto'}}/>
              </div>
              <div className='card-stacked'>
                <div className='card-content'>
                  <table className='bordred striped'>
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td><strong>{drink.strDrink}</strong></td>
                      </tr>
                      <tr> 
                        <td>Catégorie</td> 
                        <td><strong>{ drink.strCategory }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Ingrediants</td> 
                        <td><strong>{drink.strIngredient1+','} {drink.strIngredient2+','} {drink.strIngredient3+','} {drink.strIngredient4+','} {drink.strIngredient5+','}
                         {drink.strIngredient6+','} {drink.strIngredient7+','} {drink.strIngredient8+','} {drink.strIngredient9+','} {drink.strIngredient10+','}
                          {drink.strIngredient11+','} {drink.strIngredient12+','} {drink.strIngredient13+','} {drink.strIngredient14+','} {drink.strIngredient15+','}</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Avec/Sans alcool</td> 
                        <td><strong>{drink.strAlcoholic}</strong></td> 
                      </tr>
                      <tr>
                        <td>Verre</td>
                        <td><strong>{drink.strGlass}</strong></td>
                      </tr>
                      <tr> 
                        <td>Instructions</td> 
                        <td><text>{drink.strInstructions}</text></td> 
                      </tr> 
                      
                       
                     
                     
                    </tbody>
                   </table> 
              </div>
              <div className="card-action">
                  <Link to="/">Retour</Link>
              </div>
             </div> 
             </div>
             </div>
             </div>
            
      )
    })}
  </div>
  );
}
  
export default CocktailsDetail;