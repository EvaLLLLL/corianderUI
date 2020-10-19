<template>
	<button class="xc-switch"
	        @click="toggle"
	        :class="{'xc-switch-checked': value, 'xc-switch-disabled': disabled}">
		<span></span>
	</button>
</template>

<script lang="ts">
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		setup(props, context) {
			const toggle = () => {
				context.emit('update:value', !props.value);
			};
			return {toggle};
		}
	};
</script>

<style lang="scss">
	$h: 22px;
	$h2: $h - 4px;
	$green: #657c50;
	$grey: #bbbbbb;
	.xc-switch {
		height: $h;
		width: $h * 2;
		border: none;
		background: $grey;
		border-radius: $h/2;
		position: relative;
		& + & {
			margin-left: 10px;
		}
		> span {
			position: absolute;
			top: 2px;
			left: 2px;
			height: $h2;
			width: $h2;
			border-radius: $h2/2;
			background: white;
			transition: left 350ms;
		}
		&:focus {
			outline: none;
		}
		&:active {
			> span {
				width: $h2 + 4px;
			}
		}
		&.xc-switch-checked {
			background: lighten($green, 25%);
			> span {
				left: calc(100% - #{$h2} - 2px);
			}
			&:active {
				> span {
					width: $h2 + 4px;
					margin-left: -4px;
				}
			}
		}
		&.xc-switch-disabled {
			background: lighten($grey, 15%);
			cursor: not-allowed;
		}
	}
</style>