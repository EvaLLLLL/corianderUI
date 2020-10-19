<template>
	<div class="docWrapper">
		<TopNav/>
		<div class="content">
			<aside v-if="menuVisible">
				<h2>文档</h2>
				<ol>
					<li>
						<router-link to="/doc/intro">介绍</router-link>
					</li>
					<li>
						<router-link to="/doc/install">安装</router-link>
					</li>
				</ol>
				<h2>组件列表</h2>
				<ol>
					<li>
						<router-link to="/doc/switch">Switch 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/button">Button 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/dialog">Dialog 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/menu">Menu 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">Tabs 组件</router-link>
					</li>
				</ol>
			</aside>
			<main>
				<router-view/>
			</main>
		</div>
	</div>
</template>

<script lang="ts">
	import {inject, Ref} from 'vue';
	import TopNav from '../components/TopNav.vue';
	
	export default {
		components: {TopNav},
		setup() {
			const menuVisible = inject<Ref<boolean>>('menuVisible');
			return {menuVisible: menuVisible};
		}
	};
</script>

<style lang="scss">
	$color: #657c50;
	
	.docWrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
		> .nav {
			flex-shrink: 0;
		}
		> .content {
			flex-grow: 1;
			padding-top: 60px;
			padding-left: 156px;
			@media (max-width: 500px) {
				padding-left: 0;
			}
		}
	}
	.content {
		display: flex;
		flex-direction: row;
		> aside {
			color: #555;
			box-shadow: 1px 0 0 fade-out(black, 0.95);
			flex-shrink: 0;
			width: 150px;
			padding: 80px 0;
			background: white;
			position: fixed;
			left: 0;
			top: 0;
			height: 100%;
			z-index: 9;
			> h2 {
				margin-bottom: 4px;
				margin-left: 16px;
			}
			> ol {
				> li {
					padding: 8px 0;
					> a {
						display: block;
						margin-left: 16px;
						&.router-link-active {
							font-weight: bold;
							color: $color;
							border-right: 2px solid $color;
						}
					}
				}
			}
		}
		> main {
			flex-grow: 1;
			padding: 32px;
			height: 100vh;
		}
	}
</style>
