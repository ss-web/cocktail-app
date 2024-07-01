import { CocktailDetails } from '../types/CocktailDetails';

export function extractIngredients(cocktail: CocktailDetails): { name: string; measure: string }[] {
	const ingredients: { name: string; measure: string }[] = [];

	let index = 1;
	while (cocktail[`strIngredient${index}` as keyof CocktailDetails]) {
		const ingredient = cocktail[`strIngredient${index}` as keyof CocktailDetails]!;
		const measure = cocktail[`strMeasure${index}` as keyof CocktailDetails] || '';
		ingredients.push({ name: `${ingredient}`, measure: `${measure}` });
		index++;
	}

	return ingredients;
}