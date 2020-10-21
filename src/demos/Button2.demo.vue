<demo>
	不同大小的按钮示例
</demo>

<template>
	<Button size="normal">正常尺寸</Button>
	<Button size="small">小小按钮</Button>
	<Button size="big">大大按钮</Button>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>
