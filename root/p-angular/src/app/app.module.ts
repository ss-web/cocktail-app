import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrinksComponent } from './components/pages/drinks/drinks.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AppAsideComponent } from './components/blocks/aside/aside.component';
import { CocktailComponent } from './components/lists/cocktail/cocktail.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppAsideComponent,
		CocktailComponent,
		AppComponent,
		DrinksComponent,
		NotFoundComponent
	],
	exports: [
		AppAsideComponent,
		CocktailComponent
	],
	imports: [
		RouterModule.forRoot([]),
		BrowserModule,
		CommonModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
