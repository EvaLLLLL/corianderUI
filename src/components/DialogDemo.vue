<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Dialog v-model:dialogVisible="dialogVisible"
	        :dialogCancel="dialogCancelFn"
	        :dialogOk="dialogOkFn"
	        closeOnclickOverlay></Dialog>
	<Button level="main" @click="toggleDialogVisible">toggleDialogVisible</Button>
</template>

<script lang="ts">
	import Dialog from '../lib/Dialog.vue';
	import Button from '../lib/Button.vue';
	import {ref} from 'vue';
	
	export default {
		components: {Dialog, Button},
		setup() {
			const dialogVisible = ref(false);
			
			const toggleDialogVisible = () => {
				dialogVisible.value = !dialogVisible.value;
			};
			
			const dialogOkFn = () => {
				return false;
			};
			
			const dialogCancelFn = () => {
			};
			
			return {dialogVisible, toggleDialogVisible, dialogOkFn, dialogCancelFn};
		}
	};
</script>
