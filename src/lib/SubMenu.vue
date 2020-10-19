<template>
	<div class="xc-menu" ref="xcMenu">
		<div class="xc-menu-wrapper"
		     ref="subMenuTitle"
		     @click="openMenu">
			<span class="xc-menu-subtitle">{{subtitle}}</span>
			<span class="xc-menu-up" v-if="menuVisible"></span>
			<span class="xc-menu-down" v-else></span>
		</div>
		<div class="xc-menu-items" v-if="menuVisible">
			<component v-for="(c, index) in menuItems"
			           class="xc-menu-item"
			           :key="c"
			           :is="c"/>
		</div>
	</div>
</template>

<script lang="ts">
	import Menu from '../lib/Menu.vue';
	import {ref, onMounted} from 'vue';
	
	export default {
		components: {Menu},
		props: {
			title: {
				type: String,
			},
			openSubs: {
				type: Array
			}
		},
		setup(props, context) {
			const subMenuTitle = ref(null);
			const xcMenu = ref(null);
			onMounted(() => {
				xcMenu.value.style.width = (subtitle.length * 16 * 1.2 + 100) + 'px';
			});
			
			const menuVisible = ref(false);
			const openMenu = () => {
				menuVisible.value = !menuVisible.value;
			};
			
			const subtitle = props.title;
			const menuItems = context.slots.default();
			return {xcMenu, subMenuTitle, subtitle, menuItems, menuVisible, openMenu};
		}
	};
</script>

<style lang="scss">
	$green: #657c50;
	.xc-menu {
		display: flex;
		flex-direction: column;
		justify-content: left;
		color: #555;
	}
	.xc-menu-wrapper {
		display: flex;
		border: 1px solid green;
		padding: 10px;
		justify-content: space-between;
		align-items: center;
	}
	.xc-menu-subtitle {
		border: 1px solid red;
		font-size: 1.2em;
		& + & {
			border-top: none;
		}
	}
	.xc-menu-items {
		display: block;
		width: 100%;
		> .xc-menu-item {
			border: 1px solid red;
			padding: 10px;
		}
	}
	.xc-menu-down {
		border: 1px solid $green;
		border-right: transparent;
		border-top: transparent;
		display: inline-block;
		width: 8px;
		height: 8px;
		cursor: pointer;
		transform: rotate(-45deg);
	}
	.xc-menu-up {
		border: 1px solid $green;
		border-right: transparent;
		border-top: transparent;
		display: inline-block;
		width: 8px;
		height: 8px;
		cursor: pointer;
		transform: rotate(135deg);
	}
</style>