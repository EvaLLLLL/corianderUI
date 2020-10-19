<template>
	<div>
		<slot/>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			itemkey : {
				type: String
			}
		}
	}
</script>