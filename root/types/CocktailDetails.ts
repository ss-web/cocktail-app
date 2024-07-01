export interface CocktailDetails {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
	strCategory: string;
	strAlcoholic: string;
	strGlass: string;
	strInstructions: string;
	ingredients: {
		strMeasure: string;
		strIngredient: string;
	}[];
}