<template>
	<div class="topnav">
		<a class="logo" href="/">
			<span>香菜UI</span>
		</a>
		<ol class="menu">
			<li>
				<router-link to="/doc">文档</router-link>
			</li>
			<li>
				<router-link to="/doc/switch">组件列表</router-link>
			</li>
			<li>
				<!--TODO-->
				<a href="/">和我交流</a>
			</li>
		</ol>
		<svg class="icon-menu">
			<use xlink:href="#icon-menu"></use>
		</svg>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'TopNav',
		props: {
			toggleVisible: Boolean,
		},
		setup() {
		},
	};
</script>

<style lang="scss">
	$color: #657c50;
	.topnav {
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
			max-width: 6em;
			font-size: 1.2em;
			margin-right: auto;
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
		}
		> .icon-menu {
			display: none;
			width: 30px;
			height: 30px;
			position: absolute;
			left: 16px;
			top: 50%;
			transform: translateY(-50%);
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
