<template>
	<button class="xc-button" :class="classes">
		<span class="loading" v-if="loading"></span>
		<slot/>
	</button>
</template>

<script lang="ts">
	import {computed} from 'vue';
	
	export default {
		props: {
			theme: {
				type: String,
				default: 'button'
			},
			size: {
				type: String,
				default: 'normal'
			},
			level: {
				type: String,
				default: 'normal'
			},
			loading: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		setup(props) {
			const {theme, size, level, loading, disabled} = props;
			const classes = computed(() => {
				return {
					[`xc-theme-${theme}`]: theme,
					[`xc-size-${size}`]: size,
					[`xc-level-${level}`]: level,
					[`xc-loading-${loading}`]: loading,
					[`xc-disabled-${disabled}`]: disabled,
				};
			});
			return {classes};
		}
	};
</script>

<style lang="scss">
	$h: 32px;
	$border-color: #d9d9d9;
	$color: #333;
	$green: #657c50;
	$radius: 4px;
	.xc-button {
		height: $h;
		padding: 0 12px;
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		background: white;
		color: $color;
		border: 1px solid $border-color;
		border-radius: $radius;
		box-shadow: 0 1px 0 fade-out(black, 0.95);
		&:hover, &:focus {
			color: $green;
			border-color: $green;
		}
		&:focus {
			outline: none;
		}
		&::-moz-focus-inner {
			border: 0;
		}
		& + & {
			margin-left: 10px;
		}
		&.xc-theme-link {
			border-color: transparent;
			box-shadow: none;
			color: $green;
			&:hover, &:focus {
				color: lighten($green, 10%);
			}
		}
		&.xc-theme-text {
			border-color: transparent;
			box-shadow: none;
			color: inherit;
			&:hover,
			&:focus {
				background: darken(white, 10%);
			}
		}
		&.xc-theme-button {
			&.xc-size-small {
				font-size: 12px;
				height: 20px;
				padding: 0 4px;
			}
			&.xc-size-big {
				font-size: 18px;
				height: 36px;
				padding: 0 16px;
			}
		}
		&.xc-level-main {
			background: $green;
			color: white;
			border-color: $green;
			&:hover,
			&:focus {
				background: darken($green, 10%);
				border-color: darken($green, 10%);
			}
		}
		&.xc-level-danger {
			background: red;
			color: white;
		}
		&.xc-disabled-true {
			color: rgb(165, 165, 165);
			border: 1px dashed;
			cursor: not-allowed;
		}
		&.xc-loading-true {
			background: lighten($green, 25%);
			color: white;
		}
		> .loading {
			width: 14px;
			height: 14px;
			display: inline-block;
			margin-right: 4px;
			border-radius: 8px;
			border-color: white white white transparent;
			border-style: solid;
			border-width: 2px;
			animation: xc-spin 1s infinite linear;
		}
		@keyframes xc-spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
</style>