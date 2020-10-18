<template>
	<div>
		<div>
			<h2>按钮样式示例</h2>
			<Button theme="button">默认按钮</Button>
			<Button theme="link">链接按钮</Button>
			<Button theme="text">文字按钮</Button>
		</div>
		<div>
			<h2>按钮大小示例</h2>
			<Button size="normal">正常尺寸</Button>
			<Button size="small">小小按钮</Button>
			<Button size="big">大大按钮</Button>
		</div>
		<div>
			<h2>按钮主题示例</h2>
			<Button level="normal">正常按钮</Button>
			<Button level="main">主要按钮</Button>
			<Button level="danger">危险按钮</Button>
		</div>
		<div>
			<h2>加载中按钮样式</h2>
			<Button loading>加载中</Button>
		</div>
		<div>
			<h2>不可操作按钮示例</h2>
			<Button disabled>不可操作</Button>
		</div>
	</div>
</template>

<script lang="ts">
	import Button from '../lib/Button.vue';
	
	export default {
		components: {Button}
	};
</script>