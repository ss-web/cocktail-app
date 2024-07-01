<template>
	<article v-if="cocktail" class="app-article">
		<section class="app-article__block">
			<h2 class="app-article__block--title">{{ cocktail.strDrink }}</h2>
			<p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
			<p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
			<p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
			<p><strong>Instructions:</strong> {{ cocktail.strInstructions }}</p>
			<h3 class="app-article__block--subtitle">Ingredients</h3>
			<ul>
				<li v-for="(v, index) in ingredients" :key="`${index}_image`">
					{{ v.name }} {{ v.measure }}
				</li>
			</ul>
		</section>
		<Image :image="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
	</article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CocktailDetails } from '@/types/CocktailDetails';
import { extractIngredients } from '@/utils/extractIngredients';
import Image from '~/components/elements/Image.vue';

const { cocktail } = defineProps<{ cocktail: CocktailDetails }>();

const ingredients = computed(() => extractIngredients(cocktail));
</script>
