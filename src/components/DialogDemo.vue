<template>
	<h2>Dialog 组件示例</h2>
	<Demo :component="Dialog1Demo"/>
</template>

<script lang="ts">
	import Demo from '../components/Demo.vue';
	import Dialog1Demo from '../demos/Dialog1.demo.vue';
	
	export default {
		components: {Demo},
		setup() {
			return {Dialog1Demo};
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

