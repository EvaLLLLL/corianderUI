<demo>
	不可操作开关示例
</demo>

<template>
	<Switch disabled v-model:value="switchOpen"/>
</template>

<script lang="ts">
	import {Switch} from '../lib/index.ts';
	import {ref} from 'vue';
	
	export default {
		components: {Switch},
		setup(){
			const switchOpen = ref(false)
			return {switchOpen}
		}
	}
</script>
