<demo>
	正常 Tabs 示例
</demo>

<template>
	<div>
		<Tabs v-model:selected="selected">
			<Tab title="内容A">这里是内容A的内容</Tab>
			<Tab title="内容B">这里是内容B的内容</Tab>
			<Tab title="内容C">这里是内容C的内容</Tab>
			<Tab title="内容D">这里是内容D的内容</Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
	import {ref} from 'vue';
	import Tabs from '../lib/Tabs.vue';
	import Tab from '../lib/Tab.vue';
	
	export default {
		components: {Tabs, Tab},
		setup() {
			const selected = ref('内容A');
			return {selected};
		}
	};
</script>
