import React from 'react';
import { CocktailDetails } from '@/types/CocktailDetails';
import { extractIngredients } from '@/utils/extractIngredients';
import Image from '~/components/elements/Image';

interface DrinkDetailsProps {
	cocktail: CocktailDetails; // Определение типа для пропса cocktail
}

const DrinkDetails: React.FC<DrinkDetailsProps> = ({ cocktail }) => {
	const ingredients = extractIngredients(cocktail);

	return (
		<article className="app-article app-main__drinks--coctail">
			<section className="app-article__block">
				<h2 className="app-article__block--title">{cocktail.strDrink}</h2>
				<p><strong>Category:</strong> {cocktail.strCategory}</p>
				<p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
				<p><strong>Glass:</strong> {cocktail.strGlass}</p>
				<p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
				<h3 className="app-article__block--subtitle">Ingredients</h3>
				<ul>
					{ingredients.map(({ name, measure }, index) => (
						<li key={index}>
							{name} {measure}
						</li>
					))}
				</ul>
			</section>
			<Image image={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
		</article>
	);
};

export default DrinkDetails;
