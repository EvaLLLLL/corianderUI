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
	$green: #657c50;
	h2 {
		color: $green;
	}
</style>
