<template>
	<div>
		<Demo :component="Tab1Demo"/>
	</div>
</template>

<script lang="ts">
	import Demo from './Demo.vue';
	import Tab1Demo from '../demos/Tab1.demo.vue';
	
	export default {
		components: {Demo},
		setup() {
			return {Tab1Demo};
		}
	};
</script>
