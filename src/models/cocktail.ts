import { Key } from "react";
import { isThisTypeNode } from "typescript";

export default class Cocktail {
 
    // 1. Typage des propiétés d'un pokémon.
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strCategory: string;
  static idDrink: Key | undefined;
    strInsructions: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        idDrink: number,
        strDrink: string = 'name',
        strDrinkThumb: string = 'http://...',
        strIngredient1: string,
        strIngredient2: string,
        strIngredient3: string,
        strIngredient4: string,
        strCategory: string,
        strInsructions: string,
        strIngredient5: string,
        strIngredient6: string,
        strIngredient7: string,
        strIngredient8: string,
        strIngredient9: string,
        strIngredient10: string,
        strIngredient11: string,
        strIngredient12: string,
        strIngredient13: string,
        strIngredient14: string,
        strIngredient15: string,
        strAlcoholic: string,
        strGlass: string,
        strInstructions: string,
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.idDrink = idDrink;
     this.strDrink = strDrink;
     this.strDrinkThumb = strDrinkThumb;
     this.strIngredient1 = strIngredient1;
     this.strIngredient2 = strIngredient2;
     this.strIngredient3 = strIngredient3;
     this.strIngredient4 = strIngredient4;
     this.strCategory = strCategory;
     this.strInsructions = strInsructions;
     this.strIngredient5 = strIngredient5;
     this.strIngredient6 = strIngredient6;
     this.strIngredient7 = strIngredient7;
     this.strIngredient8 = strIngredient8;
     this.strIngredient9 = strIngredient9;
     this.strIngredient10 = strIngredient10;
     this.strIngredient11 = strIngredient11;
     this.strIngredient12 = strIngredient12;
     this.strIngredient13 = strIngredient13;
     this.strIngredient14 = strIngredient14;
     this.strIngredient15 = strIngredient15;
     this.strAlcoholic = strAlcoholic;
     this.strGlass = strGlass;
     this.strInstructions = strInstructions;
    }
   }