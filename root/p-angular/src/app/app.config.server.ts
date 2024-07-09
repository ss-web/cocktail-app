import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration, withHttpTransferCacheOptions, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
	providers: [
		provideServerRendering(),
		provideClientHydration(
			withEventReplay(),
			withHttpTransferCacheOptions({
					filter: (__) => true, // to filter
					includeHeaders: [], // to include headers
					includePostRequests: true, // to include POST
					includeRequestsWithAuthHeaders: false, // to include with auth
			}),
			withHttpTransferCacheOptions({
				includePostRequests: true
			})
		)
	]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
