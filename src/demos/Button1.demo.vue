<demo>
	不同样式的按钮示例
</demo>

<template>
	<Button theme="button">默认按钮</Button>
	<Button theme="link">链接按钮</Button>
	<Button theme="text">文字按钮</Button>
</template>

<script lang="ts">
	import Button from '../lib/Button.vue';
	
	export default {
		components: {Button}
	};
</script>
