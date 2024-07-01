import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { CocktailDetails } from '@/types/CocktailDetails';
import Cocktail from '~/components/lists/Cocktail';
import cocktailStore from '~/store';

const Drinks: React.FC = observer(() => {
	const location = useLocation();
	const path = location.pathname.substring(1); // remove first slash

	const drinks = cocktailStore.cocktails[path] || [];

	return (
		<main className="app-main">
			<header className="app-main__header">
				<h1 className="app-main__header--title">Drinks (react)</h1>
			</header>
			<section className="app-main__drinks">
				{drinks.map((drink: CocktailDetails) => (
					<Cocktail cocktail={drink} key={drink.idDrink} />
				))}
			</section>
		</main>
	);
});

export default Drinks;

