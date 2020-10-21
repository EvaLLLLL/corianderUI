<template>
	<div class="topnav">
		<a class="logo" href="#/">
			<svg>
				<use xlink:href="#icon-xiangcai"></use>
			</svg>
		</a>
		<ol class="menu">
			<li>
				<a href="#/">主页</a>
			</li>
			<li>
				<router-link :to="docPath">文档</router-link>
			</li>
			<li>
				<router-link to="/doc/button">组件列表</router-link>
			</li>
			<li class="github">
				<a href="https://github.com/EvaLLLLL/corianderUI">GitHub</a>
				<svg>
					<use xlink:href="#icon-goto"></use>
				</svg>
			</li>
		</ol>
		<svg class="icon-menu" @click="toggleMenu" v-if="toggleMenuButtonVisible">
			<use xlink:href="#icon-menu"></use>
		</svg>
	</div>
</template>

<script lang="ts">
	import {inject, Ref, ref} from 'vue';
	import {router} from '../main';
	
	export default {
		name: 'TopNav',
		props: {
			toggleVisible: Boolean,
			toggleMenuButtonVisible: {
				type: Boolean,
				default: false
			}
		},
		setup() {
			const menuVisible = inject<Ref<boolean>>('menuVisible');
			const toggleMenu = () => {
				menuVisible.value = !menuVisible.value;
			};
			
			let docPath = ref<String>('');
			const matchPath = router.currentRoute.value.matched;
			if (matchPath[1]) {
				docPath.value = '/doc/intro';
			} else {
				docPath.value = '/doc';
			}
			
			return {toggleMenu, docPath};
		},
	};
</script>

<style lang="scss">
	$color: #657c50;
	.topnav {
		box-shadow: 0 1px 0 fade-out(black, 0.95);
		color: $color;
		z-index: 10;
		background: white;
		padding: 16px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		> .logo {
			margin-right: auto;
			> svg {
				width: 30px;
				height: 30px;
			}
		}
		> .menu {
			display: flex;
			justify-content: center;
			align-items: center;
			> li {
				font-size: 16px;
				padding-left: 16px;
				transition: all 200ms;
				&:hover {
					cursor: pointer;
					transform: scale(1.2);
					transition: all 150ms;
				}
			}
			> .github {
				> svg {
					width: 12px;
					height: 12px;
				}
			}
		}
		> .icon-menu {
			display: none;
			width: 30px;
			height: 30px;
			position: absolute;
			left: 16px;
			top: 50%;
			transform: translateY(-50%);
			&:hover {
				cursor: pointer;
				transform: translateY(-50%) scale(1.2);
				transition: all 150ms;
			}
		}
		@media (max-width: 500px) {
			> .logo {
				margin: 0 auto;
			}
			> .menu {
				display: none;
			}
			> .icon-menu {
				display: inline-block;
			}
		}
	}
</style>
