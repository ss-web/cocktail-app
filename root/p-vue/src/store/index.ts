import { defineStore } from 'pinia';
import { cocktailService, CocktailCode } from '@/services/CocktailService';
import { CocktailDetails } from '@/types/CocktailDetails';

interface CocktailState {
	cocktails: Record<string, CocktailDetails[]>;
	isLoading: boolean;
	error: string | null;
}

export const useCocktailStore = defineStore('cocktail', {
	state: (): CocktailState => ({
		cocktails: {} as Record<string, CocktailDetails[]>,
		isLoading: false,
		error: null,
	}),
	actions: {
		async fetchCocktails(cocktailCode: CocktailCode) {
			this.isLoading = true;
			this.error = null;
			try {
				const drinks = await cocktailService.fetchCocktailInfo(cocktailCode) as CocktailDetails[];
				if (drinks) {
					if (!this.cocktails[cocktailCode]) {
						this.cocktails[cocktailCode] = [];
					}
					this.cocktails[cocktailCode] = drinks;
				} else {
					throw new Error(`Failed to fetch data for cocktail ${cocktailCode}`);
				}
			} catch (error) {
				console.error(error);
				this.error = 'Failed to fetch cocktails.';
			} finally {
				this.isLoading = false;
			}
		},
	},
});