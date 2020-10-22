<template>
	<div>
		<h2>Vue 单文件组件示例</h2>
		<CodePre :code="startCode"/>
	</div>
</template>

<script lang="ts">
	import GetStartDemo from '../demos/GetStart.demo.vue';
	import CodePre from './CodePre.vue';
	
	export default {
		components: {CodePre},
		setup() {
			const startCode = GetStartDemo.__sourceCode;
			return {startCode};
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
		margin-bottom: 20px;
	}
</style>