<template>
	<img v-lazy="lazyOptions" :alt="alt" class="image" />
</template>

<script setup lang="ts">
import Error from '@/assets/images/error.svg';
import Loading from '@/assets/images/loading.svg';

const { image, alt } = defineProps(['image', 'alt']);
const lazyOptions = { src: image, loading: Loading, error: Error };
</script>
