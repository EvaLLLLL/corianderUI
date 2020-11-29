<template>
	<div>
		<h2>Vue 单文件组件示例</h2>
		<pre><code class="language-html">&lt;template&gt;
	&lt;div&gt;
		&lt;Button&gt;按钮&lt;/Button&gt;
	&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {Button} from &#x27;coriander-ui&#x27;
import &#x27;coriander-ui/dist/lib/coriander.esm.css&#x27;

export default {
	components: {Button}
}
&lt;/script&gt;</code></pre>
	</div>
</template>

<script lang="ts">
	import 'prismjs/themes/prism-okaidia.css';
	import 'prismjs';
	
	const Prism = (window as any).Prism;
	
	export default {
		mounted() {
			Prism.highlightAll();
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