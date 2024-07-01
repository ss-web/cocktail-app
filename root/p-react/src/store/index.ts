import { makeAutoObservable } from "mobx";
import { cocktailService, CocktailCode } from '@/services/CocktailService';

class CocktailStore {
	cocktails: any = {};
	isLoading: boolean = false;
	error: string | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	fetchCocktails = async (cocktailCode: CocktailCode) => {
		this.isLoading = true;
		this.error = null;
		try {
			const drinks = await cocktailService.fetchCocktailInfo(cocktailCode);
			this.cocktails[cocktailCode] = drinks || [];
		} catch (error) {
			this.error = "Failed to fetch cocktails.";
		} finally {
			this.isLoading = false;
		}
	};
}

const cocktailStore = new CocktailStore();
export default cocktailStore;