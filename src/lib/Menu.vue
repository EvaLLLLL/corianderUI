<template>
	<div>
		<slot/>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			itemkey: {
				type: String
			}
		},
		setup(props, context) {
		}
	};
</script>
