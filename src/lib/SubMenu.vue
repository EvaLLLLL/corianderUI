<template>
	<div class="xc-menus">
		<div class="menuGroups">
			<div class="xc-menus-subtitle">{{props.title}}</div>
			<div class="xc-menus-items"></div>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			title: {
				type: String
			},
			subkey: {
				type: String
			}
		},
		setup(props, context) {
			console.log(props);
		}
	};
</script>