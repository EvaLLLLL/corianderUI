<template>
	<pre v-html="Prism.highlight(code, Prism.languages.html, 'html')" class="language-css"/>
</template>

<script lang="ts">
	import 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	
	const Prism = (window as any).Prism;
	export default {
		props: {
			code: String
		},
		setup(props) {
			const {code} = props;
			return {Prism, code};
		}
	};
</script>

<style lang="scss" scoped>
	pre {
		line-height: 1.5;
		font-size: 14px;
		font-family: "Fira Code", monospace, Consolas, "Courier New", Courier;
		margin: 0;
		white-space: pre-wrap;
		@media(max-width: 500px) {
			font-size: 12px;
		}
	}
</style>