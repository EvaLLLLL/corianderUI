<template>
	<div class="homeWrapper">
		<TopNav/>
		<div class="banner">
			<div class="left">
				<svg>
					<use xlink:href="#icon-xiangcai"></use>
				</svg>
			</div>
			<div class="right">
				<h1>香菜UI</h1>
				<h2>一个简单好用的UI框架</h2>
				<p class="actions">
					<a href="https://github.com/EvaLLLLL/corianderUI">GitHub</a>
					<router-link to="/doc">开始</router-link>
				</p>
			</div>
		</div>
		<div class="features">
			<ul>
				<li>
					<svg>
						<use xlink:href="#icon-vue"></use>
					</svg>
					<h2>基于 Vue3</h2>
					<p>使用了 Vue 3 Composition API！</p>
				</li>
				<li>
					<svg>
						<use xlink:href="#icon-ts"></use>
					</svg>
					<h2>基于 TypeScript</h2>
					<p>源代码采用 TypeScript 书写（非严格检查）</p>
				</li>
				<li>
					<svg>
						<use xlink:href="#icon-light"></use>
					</svg>
					<h2>代码易读</h2>
					<p>组件源代码简洁，使用简便</p>
				</li>
			</ul>
		</div>
	</div>

</template>

<script lang="ts">
	import TopNav from '../components/TopNav.vue';
	
	export default {
		components: {TopNav},
	};
</script>

<style lang="scss">
	$color: #657c50;
	.homeWrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		> .banner {
			display: flex;
			padding: 100px;
			justify-content: center;
			align-items: center;
			@media (max-width: 500px) {
				padding: 80px 0 0 0;
				text-align: center;
			}
			> .left {
				> svg {
					width: 200px;
					height: 200px;
					margin-right: 100px;
					border-radius: 10px;
				}
				@media (max-width: 500px) {
					display: none;
				}
			}
			> .right {
				> h1, h2 {
					color: #555;
				}
				> h2 {
					margin: 10px 0;
				}
				> .actions {
					padding: 20px 0;
					> a {
						color: $color;
						margin: 20px 15px;
						background: white;
						display: inline-block;
						$h: 40px;
						height: $h;
						line-height: $h;
						border-radius: $h/2;
						padding: 0 30px;
						border: 1px solid $color;
					}
				}
			}
		}
		> .features {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: auto;
			> ul {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				> li {
					padding: 10px;
					color: #555;
					display: flex;
					flex-direction: column;
					text-align: center;
					> h2 {
						margin: 10px 0;
					}
				}
			}
		}
	}

</style>
