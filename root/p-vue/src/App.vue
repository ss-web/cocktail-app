<template>
	<div class="app-container">
		<Aside />
		<router-view />
		<div v-if="isLoading">Loading...</div>
		<div v-else-if="error">Error: {{ error }}</div>
	</div>
	<div class="app-footer app-container">
		<span>© 2024</span>
		<span>ss-web</span>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { useCocktailStore } from '~/store';
import { cocktailCodes } from '@/data/cocktails';
import debounce from '@/utils/debounce';
import Aside from './components/blocks/Aside.vue';

const cocktailStore = useCocktailStore();
const isLoading = computed(() => cocktailStore.isLoading);
const error = computed(() => cocktailStore.error);

onMounted(async () => {
	for (const code of cocktailCodes) {
		await new Promise<void>((resolve) => {
			const delayedFetch = debounce(async () => {
				await cocktailStore.fetchCocktails(code);
				resolve();
			}, 50);
			delayedFetch();
		});
	}
});
</script>