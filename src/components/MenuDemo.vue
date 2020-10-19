<template>
	<div>
		<h2>Menus 组件示例</h2>
		<!--		<Menus v-model:openSubs="openSubs"-->
		<!--		       v-model:selectedItems="selectedItems">-->
		<SubMenu title="副菜单A" subkey="sub1">
			<Menu itemkey="1">小菜单1</Menu>
			<Menu itemkey="2">小菜单2</Menu>
			<Menu itemkey="3">小菜单3</Menu>
		</SubMenu>
		<SubMenu title="副菜单B" subkey="sub2">
			<Menu itemkey="4">小菜单4</Menu>
			<Menu itemkey="5">小菜单5</Menu>
			<Menu itemkey="6">小菜单6</Menu>
		</SubMenu>
		<SubMenu title="副菜单C" subkey="sub3">
			<Menu itemkey="7">小菜单7</Menu>
			<Menu itemkey="8">小菜单8</Menu>
			<Menu itemkey="9">小菜单9</Menu>
		</SubMenu>
		<!--		</Menus>-->
	</div>
</template>

<script lang="ts">
	import {ref} from 'vue';
	import Menus from '../lib/Menus.vue';
	import Menu from '../lib/Menu.vue';
	import SubMenu from '../lib/SubMenu.vue';
	
	export default {
		components: {Menus, Menu, SubMenu},
		setup() {
			const openSubs = ref<string[]>(['sub1']);
			const selectedItems = ref<string[]>(['1']);
			return {selectedItems, openSubs};
		}
	};
</script>