<template>
	<div class="demo">
		<h3>{{component.__sourceCodeTitle}}</h3>
		<div class="demo-component">
			<component :is="component"/>
		</div>
		<div class="demo-actions">
			<Button @click="hideCode" v-if="codeVisible">隐藏示例代码</Button>
			<Button @click="showCode" v-else>查看示例代码</Button>
		</div>
		<div class="demo-code" v-if="codeVisible">
			<pre v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" class="language-css"/>
		</div>
	</div>
</template>

<script lang="ts">
	import {ref} from 'vue';
	import 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	import Button from '../lib/Button.vue';
	
	const Prism = (window as any).Prism;
	
	export default {
		components: {Button},
		props: {
			component: Object
		},
		setup() {
			const codeVisible = ref(false);
			const hideCode = () => {
				codeVisible.value = false;
			};
			const showCode = () => {
				codeVisible.value = true;
			};
			
			return {Prism, codeVisible, hideCode, showCode};
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
				font-family: "Fira Code", monospace, Consolas, "Courier New", Courier;
				margin: 0;
			}
		}
	}
</style>
