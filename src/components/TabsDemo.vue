<template>
	<Tabs v-model:selected="selected">
		<Tab title="内容A">内容A内容A内容A内容A内容A内容A内容A内容A</Tab>
		<Tab title="内容B">BBBBBBBBBB</Tab>
	</Tabs>
</template>

<script lang="ts">
	import {ref} from 'vue';
	import Tabs from '../lib/Tabs.vue';
	import Tab from '../lib/Tab.vue';
	
	export default {
		components: {Tabs, Tab},
		setup(props, context) {
			const selected = ref('内容A');
			return {selected};
		}
	};
</script>