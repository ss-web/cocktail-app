<template>
	<article v-if="cocktail" class="drinks__coctail">
		<section class="article">
			<h2 class="article__title">{{ cocktail.strDrink }}</h2>
			<p class="article__paragraph"><strong class="article__strong">Category:</strong> {{ cocktail.strCategory }}</p>
			<p class="article__paragraph"><strong class="article__strong">Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
			<p class="article__paragraph"><strong class="article__strong">Glass:</strong> {{ cocktail.strGlass }}</p>
			<p class="article__paragraph"><strong class="article__strong">Instructions:</strong> {{ cocktail.strInstructions }}</p>
			<h3 class="article__subtitle">Ingredients</h3>
			<ul class="article__list">
				<li v-for="(v, index) in ingredients" :key="`${index}_image`" class="article__list-item">
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
