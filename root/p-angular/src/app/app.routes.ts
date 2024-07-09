import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from './components/pages/drinks/drinks.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/margarita', pathMatch: 'full' },
	{ path: 'margarita', component: DrinksComponent },
	{ path: 'mojito', component: DrinksComponent },
	{ path: 'a1', component: DrinksComponent },
	{ path: 'kir', component: DrinksComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }