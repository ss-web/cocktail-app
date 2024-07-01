import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cocktail } from '@/types/Cocktail';
import { cocktails } from '@/data/cocktails';

const Aside: React.FC = () => {
	return (
		<aside className="app-aside">
			<nav className="app-aside__nav">
				{cocktails.map((cocktail: Cocktail) => (
					<NavLink
						key={cocktail.code}
						to={`/${cocktail.code}`}
						className={({ isActive }) => (isActive ? 'active' : '') + ' app-aside__nav--link'}
					>
						{cocktail.name}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default Aside;
