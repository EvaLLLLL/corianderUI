<template>
	<router-view/>
</template>

<script lang="ts">
	import {provide, ref} from 'vue';
	import {router} from './main.ts';
	
	export default {
		name: 'App',
		setup() {
			const width = document.documentElement.clientWidth;
			
			const menuVisible = ref(width > 500);
			provide('menuVisible', menuVisible);
			
			router.afterEach(() => {
				if (width <= 500) {
					menuVisible.value = false;
				}
				document.scrollingElement.scrollTop = 0;
			});
		},
	};
</script>
