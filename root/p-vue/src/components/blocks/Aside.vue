<template>
	<aside class="aside">
		<nav class="aside__nav">
			<router-link
				v-for="cocktail in cocktails"
				:key="cocktail.code"
				:to="`/${cocktail.code}`"
				class="aside__nav__link"
				:class="{ 'aside__nav__link--active': route.name === cocktail.code }
			">
				{{ cocktail.name }}
			</router-link>
		</nav>
	</aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { cocktails } from '@/data/cocktails';

const route = useRoute();

const isActiveRoute = (code: string) => {
	return computed(() => route.name === code);
};
</script>
