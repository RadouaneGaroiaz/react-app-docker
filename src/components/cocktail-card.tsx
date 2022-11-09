import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cocktail from '../models/cocktail';
import './cocktail-card.css';

type Props = {
  cocktail: Cocktail,
  borderColor?: string
};
  
const CocktailCard: FunctionComponent<Props> = ({cocktail, borderColor ='#009688'}) => {
    
  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBorder = () => {
    setColor(borderColor);
  }

  const hideBorder = () => {
    setColor('#f5f5f5');
  }

  const goToCocktail = (id: Number) => {
    history.push(`/cocktails/${id}`);
  }

    

   
   

    return (
        <div className="col s6 m4" onClick={() => goToCocktail(cocktail.idDrink)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
          <div className="card horizontal" style={{borderColor: color}}>
            <div className="card-image"> 
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Name: {cocktail.strDrink}</p>
             
              
                
              </div>
            </div>
          </div> 
        </div>
      );
}
  
export default CocktailCard;