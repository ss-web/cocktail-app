import { cocktailCodes } from '@/data/cocktails';
import { CocktailDetails } from '@/types/CocktailDetails';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // use dotenv .env in real project

export type CocktailCode = typeof cocktailCodes[number];

interface CocktailResponse {
	drinks: CocktailDetails[];
}

export class CocktailService {
	async fetchCocktailInfo(cocktailCode: CocktailCode): Promise<CocktailDetails[] | null> {
		const url = `${BASE_URL}${cocktailCode}`;
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.statusText}`);
			}
			const data: CocktailResponse = await response.json();
			const drinks: CocktailDetails[] = data.drinks;
			return drinks ? drinks : null;
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Error fetching cocktail info: ${error.message}`);
			} else {
				console.error(`Unknown error occurred: ${error}`);
			}
			return null;
		}
	}
}

export const cocktailService = new CocktailService();