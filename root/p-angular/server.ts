import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// function modifyHtml(html: string): string {
// 	// HACK for remove angular trash code
// 	// TODO need to understand how to do it with default functional 
// 	return html.replace(/<router-outlet[^>]*><\/router-outlet>/g, '<div></div>');
// }

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express();
	const serverDistFolder = dirname(fileURLToPath(import.meta.url));
	const browserDistFolder = resolve(serverDistFolder, '../browser');
	const indexHtml = join(serverDistFolder, 'index.server.html');

	const commonEngine = new CommonEngine(); // TODO need to find other solution for SSR build and remove not semantic tags 

	server.set('view engine', 'html');
	server.set('views', browserDistFolder);

	// All regular routes use the Angular engine
	server.get('**', (req, res, next) => {
		const { protocol, originalUrl, baseUrl, headers } = req;

		commonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => res.send(html))
			.catch((err) => next(err));
	});

	return server;
}

function run(): void {
	const port = process.env['PORT'] || 8082;

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

run();
