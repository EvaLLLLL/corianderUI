<template>
	<div>
		<h2>Switch 组件示例</h2>
		<div class="demo">
			<h3>常规用法</h3>
			<div class="demo-component">
				<component :is="Switch1Demo"/>
			</div>
			<div class="demo-actions">
				<Button @click="toggleCodeVisible">查看代码</Button>
			</div>
			<div class="demo-code" v-if="codeVisible">
				<pre v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')" class="language-css"/>
			</div>
		</div>
		<div class="demo">
			<h3>禁用用法</h3>
			<div class="demo-component">
				<component :is="Switch2Demo"/>
			</div>
			<div class="demo-actions">
				<Button @click="toggleCodeVisible">查看代码</Button>
			</div>
			<div class="demo-code" v-if="codeVisible">
				<pre v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')" class="language-css"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Switch from '../lib/Switch.vue';
	import Switch1Demo from '../demos/Switch1.demo.vue';
	import Switch2Demo from '../demos/Switch2.demo.vue';
	import Button from '../lib/Button.vue';
	import {ref} from 'vue';
	import 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	
	const Prism = (window as any).Prism;
	
	export default {
		components: {Switch, Button},
		setup() {
			const bool = ref(true);
			const codeVisible = ref(false);
			const toggleCodeVisible = () => {
				codeVisible.value = !codeVisible.value;
			};
			return {Prism, bool, Switch1Demo, Switch2Demo, codeVisible, toggleCodeVisible};
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
</style>