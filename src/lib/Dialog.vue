<template>
	<template v-if="dialogVisible">
		<div class="xc-dialog-overlay"
		     @click="overlayDialogClose"></div>
		<div class="xc-dialog-wrapper">
			<div class="xc-dialog">
				<header>
					<slot name="dialogTitle"/>
					<span class="xc-dialog-close"
					      @click="dialogClose"></span>
				</header>
				<main>
					<slot name="dialogContent"/>
				</main>
				<footer>
					<Button level="main" @click="dialogOk">确认</Button>
					<Button @click="dialogCancel">取消</Button>
				</footer>
			</div>
		</div>
	</template>
</template>

<script lang="ts">
	import Button from './Button.vue';
	
	export default {
		components: {Button},
		props: {
			dialogVisible: {
				type: Boolean,
				default: false
			},
			closeOnclickOverlay: {
				type: Boolean,
				default: false
			},
			dialogOk: {
				type: Function,
			},
			dialogCancel: {
				type: Function
			}
		},
		setup(props, context) {
			const dialogClose = () => {
				context.emit('update:dialogVisible', false);
			};
			
			const overlayDialogClose = () => {
				if (props.closeOnclickOverlay) {
					dialogClose();
				}
			};
			
			const dialogOk = () => {
				if (props.dialogOk?.() !== false) {
					dialogClose();
				}
			};
			
			const dialogCancel = () => {
				context.emit('dialogCancel');
				dialogClose();
			};
			
			return {dialogClose, overlayDialogClose, dialogCancel, dialogOk};
		}
	};
</script>

<style lang="scss">
	$radius: 4px;
	$border-color: #d9d9d9;
	
	.xc-dialog {
		background: white;
		border-radius: $radius;
		box-shadow: 0 0 3px fade_out(black, 0.5);
		min-width: 15em;
		max-width: 90%;
		
		&-overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: fade_out(black, 0.5);
			z-index: 10;
		}
		
		&-wrapper {
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 11;
		}
		> header {
			padding: 12px 16px;
			border-bottom: 1px solid $border-color;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 20px;
		}
		> main {
			padding: 12px 16px;
		}
		> footer {
			border-top: 1px solid $border-color;
			padding: 12px 16px;
			text-align: right;
		}
		&-close {
			position: relative;
			display: inline-block;
			width: 16px;
			height: 16px;
			cursor: pointer;
			&::before,
			&::after {
				content: '';
				position: absolute;
				height: 1px;
				background: black;
				width: 100%;
				top: 50%;
				left: 50%;
			}
			&::before {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
			&::after {
				transform: translate(-50%, -50%) rotate(45deg);
			}
		}
	}
</style>