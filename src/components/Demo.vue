<template>
	<div class="demo">
		<h3>{{component.__sourceCodeTitle}}</h3>
		<div class="demo-component">
			<component :is="component"/>
		</div>
		<div class="demo-actions">
			<Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
			<Button @click="showCode" v-else>查看代码</Button>
		</div>
		<div class="demo-code" v-if="codeVisible">
			<CodePre :code="component.__sourceCode"/>
		</div>
	</div>
</template>

<script lang="ts">
	import {ref} from 'vue';
	import Button from '../lib/Button.vue';
	import CodePre from './CodePre.vue';
	
	export default {
		components: {CodePre, Button},
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
			
			return {codeVisible, hideCode, showCode};
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
		}
	}
</style>
