<template>
	<div>
		<h2>Switch 组件示例</h2>
		<Demo :component="Switch1Demo"/>
		<Demo :component="Switch2Demo"/>
	</div>
</template>

<script lang="ts">
	import Demo from '../components/Demo.vue';
	import Switch1Demo from '../demos/Switch1.demo.vue';
	import Switch2Demo from '../demos/Switch2.demo.vue';
	
	export default {
		components: {Demo},
		setup() {
			return {Switch1Demo, Switch2Demo};
		}
	};
</script>

<style lang="scss" scoped>
	$border-color: #d9d9d9;
	.demo {
		border: 1px solid $border-color;
		margin: 16px 0 32px;
		> h3 {
			font-size: 20px;
			padding: 8px 16px;
			border-bottom: 1px solid $border-color;
		}
		&-component {
			padding: 16px;
		}
		&-actions {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
		}
		&-code {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
			> pre {
				line-height: 1.1;
				font-family: Consolas, "Courier New", Courier, monospace;
				margin: 0;
			}
		}
	}
	h2 {
		line-height: 1.25;
		font-weight: 600;
		font-size: 1.5em;
		padding-bottom: 0.3em;
		border-bottom: 1px solid rgb(234, 236, 239);
	}
</style>