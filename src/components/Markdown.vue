<template>
	<article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
	export default {
		props: {
			content: {
				type: String,
				required: true
			}
		},
	};
</script>

<style lang="scss" scoped>
	.markdown-body {
		> pre > code {
			line-height: 1.5;
			font-size: 14px;
			font-family: "Fira Code", monospace, Consolas, "Courier New", Courier;
			margin: 0;
			white-space: pre-wrap;
			@media(max-width: 500px) {
				font-size: 12px;
			}
		}
	}
</style>
