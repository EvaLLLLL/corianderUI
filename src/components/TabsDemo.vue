<template>
	<div>
		<h2>Tabs 组件示例</h2>
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
