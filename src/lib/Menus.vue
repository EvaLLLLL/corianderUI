<template>
	<slot/>
</template>

<script lang="ts">
	export default {
		props: {
			openSubs: {
				type: Array
			},
			selectedItems: {
				type: Array
			}
		},
		setup(props, context) {
		
		}
	};
</script>
