<template>
	<div>
		<h2>Button 组件示例</h2>
		<Demo :component="Button1Demo"/>
		<Demo :component="Button2Demo"/>
		<Demo :component="Button3Demo"/>
		<Demo :component="Button4Demo"/>
		<Demo :component="Button5Demo"/>
	</div>
</template>

<script lang="ts">
	import Button from '../lib/Button.vue';
	import Demo from '../components/Demo.vue';
	import Button1Demo from '../demos/Button1.demo.vue';
	import Button2Demo from '../demos/Button2.demo.vue';
	import Button3Demo from '../demos/Button3.demo.vue';
	import Button4Demo from '../demos/Button4.demo.vue';
	import Button5Demo from '../demos/Button5.demo.vue';
	
	export default {
		components: {Button, Demo},
		setup() {
			return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
		}
	};
</script>

<style lang="scss" scoped>
	$green: #657c50;
	h2 {
		color: $green;
	}
</style>