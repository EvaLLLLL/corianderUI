<demo>
	Vue 单文件组件代码示例
</demo>

<template>
	<div>
		<Button>按钮</Button>
	</div>
</template>

<script>
	import {Button} from '../lib/index.ts'
	// import 'coriander-ui/dist/lib/coriander.esm.css'
	
	export default {
		components: {Button}
	}
</script>
