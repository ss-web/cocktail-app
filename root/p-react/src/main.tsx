import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/reset.scss';
import '@/assets/styles/style.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
