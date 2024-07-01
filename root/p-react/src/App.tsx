import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import { cocktailCodes } from '@/data/cocktails';
import cocktailStore from '~/store';
import Drinks from '~/components/pages/Drinks';
import NotFound from '~/components/pages/NotFound';
import Aside from '~/components/blocks/Aside';
import debounce from '@/utils/debounce';

const App: React.FC = () => {
	const isFirstLoad = useRef(true); // load only one time

	useEffect(() => {
		if (isFirstLoad.current) {
			isFirstLoad.current = false;
			const fetchAllDrinks = async () => {
				for (const code of cocktailCodes) {
					await new Promise<void>((resolve) => {
						const delayedFetch = debounce(async () => {
							await cocktailStore.fetchCocktails(code);
							resolve();
						}, 50);
						delayedFetch();
					});
				}
			};
			fetchAllDrinks();
		}
	}, []);

	if (cocktailStore.isLoading) {
		return <div>Loading...</div>;
	}

	if (cocktailStore.error) {
		return <div>Error: {cocktailStore.error}</div>;
	}

	return (
		<Router>
			<div className="app-container">
				<Aside />
				{cocktailStore.isLoading}
				<Routes>
					<Route path="/" element={<Navigate to="/margarita" />} />
					<Route path="/margarita" element={<Drinks />} />
					<Route path="/a1" element={<Drinks />} />
					<Route path="/mojito" element={<Drinks />} />
					<Route path="/kir" element={<Drinks />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<div className="app-footer app-container">
				<span>© 2024</span>
				<span>ss-web</span>
			</div>
		</Router>
	);
};

export default App;
