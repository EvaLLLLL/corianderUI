<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Dialog v-model:dialogVisible="dialogVisible"
	        :dialogCancel="dialogCancelFn"
	        :dialogOk="dialogOkFn"
	        closeOnclickOverlay>
		<template v-slot:dialogTitle>
			<strong>自定义标题</strong>
		</template>
		<template v-slot:dialogContent>
			<strong>自定义内容</strong>
			<div>第二行内容</div>
			<i>第三行内容</i>
		</template>
	</Dialog>
	<Button level="main" @click="toggleDialogVisible">打开Dialog</Button>
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
				return true;
			};
			
			const dialogCancelFn = () => {
			};
			
			return {dialogVisible, toggleDialogVisible, dialogOkFn, dialogCancelFn};
		}
	};
</script>
