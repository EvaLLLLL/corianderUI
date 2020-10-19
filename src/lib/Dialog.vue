<template>
	<div class="xc-dialog">
		<div class="xc-dialog-overlay"></div>
		<div class="xc-dialog-wrapper">
			<header>标题</header>
			<main>
				<p>第一行字</p>
				<p>第二行字</p>
			</main>
			<footer>
				<Button level="main">确认</Button>
				<Button>取消</Button>
			</footer>
		</div>
	</div>
</template>

<script lang="ts">
	import Button from './Button.vue';
	
	export default {
		components: {Button}
	};
</script>

<style lang="scss">

</style>