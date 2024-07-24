<template>
	<main class="main">
		<header class="main__header">
			<h1 class="main__header__title">Drinks (vue)</h1>
		</header>
		<section class="drinks">
			<Cocktail v-for="drink in drinks" :key="drink.idDrink" :cocktail="drink" />
		</section>
	</main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCocktailStore } from '~/store';
import Cocktail from '~/components/lists/Cocktail.vue';

const route = useRoute();
const cocktailStore = useCocktailStore();

const drinks = computed(() => (cocktailStore.cocktails[route.name as string] || []));
</script>
