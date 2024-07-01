import { Cocktail } from '@/types/Cocktail';

export const cocktails: Cocktail[] = [
	{ name: 'Margarita', code: 'margarita' },
	{ name: 'Mojito', code: 'mojito' },
	{ name: 'A1', code: 'a1' },
	{ name: 'Kir', code: 'kir' },
];

export const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'] as const;