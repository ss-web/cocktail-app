import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cocktails } from '@/data/cocktails';

interface Cocktail {
	code: string;
	name: string;
}

@Component({
	selector: '[appAside]',
	standalone: true,
	imports: [NgForOf, NgClass, RouterModule],
	templateUrl: './aside.component.html'
})
export class AppAsideComponent {
	cocktails: Cocktail[] = cocktails;

	constructor(public router: Router, private route: ActivatedRoute) {

		console.log(this.cocktails);
	}

	isActive(cocktailCode: string): boolean {
		return this.route.snapshot.firstChild?.routeConfig?.path === cocktailCode;
	}
}
