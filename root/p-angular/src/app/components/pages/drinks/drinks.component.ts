import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForOf, NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CocktailDetails } from '@/types/CocktailDetails';
import { CocktailComponent } from '~/components/lists/cocktail/cocktail.component';

interface ApiResponse {
	drinks: CocktailDetails[];
}

@Component({
	selector: 'app-drinks',
	standalone: true,
	imports: [NgForOf, NgClass, NgIf, CocktailComponent],
	templateUrl: './drinks.component.html'
})
export class DrinksComponent implements OnInit {
	cocktailCode: string | undefined | null = null;
	cocktailData: CocktailDetails[] | null = null;

	constructor(private route: ActivatedRoute, private http: HttpClient) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.cocktailCode = this.route.snapshot.routeConfig?.path;
			this.fetchCocktailData();
		});
	}

	fetchCocktailData(): void {
		if (this.cocktailCode) {
			this.http.get<ApiResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.cocktailCode}`)
				.subscribe((data: ApiResponse) => {
					const { drinks } = data;
					this.cocktailData = drinks;
				});
		}
	}
}
