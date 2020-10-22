<template>
	<div>
		<h2>Tabs 组件示例</h2>
		<Demo :component="Tab1Demo" codeOpen/>
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

<style lang="scss" scoped>
	h2 {
		line-height: 1.25;
		font-weight: 600;
		font-size: 1.5em;
		padding-bottom: 0.3em;
		border-bottom: 1px solid rgb(234, 236, 239);
	}
</style>
