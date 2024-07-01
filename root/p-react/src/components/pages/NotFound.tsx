import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
	return (
		<div>
			<h1>Page is not found</h1>
			<p>
				<Link to="/">
					Back to home page
				</Link>
			</p>
		</div>
	);
};

export default NotFoundPage;