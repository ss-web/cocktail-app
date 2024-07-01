# Cocktail App

This project is a web application that fetches cocktail data from an external API and displays it based on different cocktail codes. It consists of separate applications using React and Vue frameworks.

- React App: Runs on port 3001
- Vue App: Runs on port 3000

## Features

- Displays cocktail details fetched from the [CocktailDB API](https://www.thecocktaildb.com/api.php).
- Uses lazy-loading for images and ensures responsive design.
- Implements state management with Mobx for React and Pinia for Vue.
- Supports routing with React Router and Vue Router.
- Ensures error handling for 404 pages and network errors.
- Implements responsive design with a maximum width of 1024px and a minimum width of 360px.
- Utilizes Docker for containerization and Docker Compose for orchestration.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vue**: Progressive JavaScript framework for building UIs.
- **Mobx**: State container for JavaScript apps (used in React app).
- **Pinia**: State management pattern + library for Vue.js applications.
- **React Router**: Declarative routing for React applications.
- **Vue Router**: The official router for Vue.js applications.
- **Vite**: Next-generation front-end tooling for Vue and React.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **SCSS**: CSS extension language.
- **Docker**: Platform for developing, shipping, and running applications in containers.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Usage

To run the project locally using Docker Compose:

1. Clone the repository:

	```bash
	git clone <repository-url>
	cd cocktail-app
	```

2. Build and run the Docker containers:

	```bash
	docker-compose up --build
	```
3. Access the React application at http://localhost:3000 and the Vue application at http://localhost:3001.

## Project Structure

```plaintext
cocktail-app
│	compose.yaml
│	README.md
│	tsconfig.json
│
└── root
	├── assets
	├── data
	└── p-react
	│	├── public/
	│	├── src/
	│	├── Dockerfile
	│	└── tsconfig.json
	└── p-vue
	│	├── public/
	│	├── src/
	│	├── Dockerfile
	│	├── Dockerfile
	│	└── tsconfig.json
	├── services
	├── types
	└── utils
```
## Description

Include a brief description of each directory's purpose in your project.

		root: Main directory containing all project-related files and folders.
				assets: Directory for storing project assets like images, fonts, etc.
				data: Directory for storing data files if applicable.
				p-react: Directory for React project files.
				p-vue: Directory for Vue project files.
				services: Directory for backend services or shared utilities.
				types: Directory for TypeScript type definitions.
				utils: Directory for utility functions or helper scripts.