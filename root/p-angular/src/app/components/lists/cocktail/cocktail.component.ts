import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForOf, NgClass, NgIf } from '@angular/common';
import { ImageComponent } from '~/components/elements/image/image.component';
import { extractIngredients } from '@/utils/extractIngredients';
import { CocktailDetails } from '@/types/CocktailDetails';

@Component({
	selector: '[appCocktail]',
	standalone: true,
	imports: [NgForOf, NgClass, NgIf, ImageComponent],
	templateUrl: './cocktail.component.html'
})
export class CocktailComponent implements OnChanges {
	@Input() cocktail: CocktailDetails | null = null;
	ingredients: { name: string, measure: string }[] | null = null;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['cocktail'] && this.cocktail) {
			this.ingredients = extractIngredients(this.cocktail);
		}
	}
}