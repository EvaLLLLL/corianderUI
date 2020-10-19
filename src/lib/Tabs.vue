<template>
	<div class="xc-tabs">
		<div class="xc-tabs-nav" ref="container">
			<div class="xc-tabs-nav-item"
			     v-for="(t, index) in titles"
			     :ref="el => { if (t===selected) selectedItem = el }"
			     :key="index"
			     @click="select(t)"
			     :class="{selected: t===selected}">{{t}}
			</div>
			<div class="xc-tabs-nav-indicator" ref="indicator"></div>
		</div>
		<div class="xc-tabs-content">
			<component class="xc-tabs-content-item"
			           v-for="(c, index) in defaults"
			           :class="{selected: c.props.title === selected}"
			           :is="c"
			           :key="index"/>
		</div>
	</div>
</template>

<script lang="ts">
	import {ref, watchEffect, onMounted, onUpdated, computed} from 'vue';
	
	export default {
		props: {
			selected: {
				type: String,
			}
		},
		setup(props, context) {
			const selectedItem = ref<HTMLDivElement>(null);
			const container = ref<HTMLDivElement>(null);
			const indicator = ref<HTMLDivElement>(null);
			
			onMounted(() => {
				watchEffect(() => {
					const {width} = selectedItem.value.getBoundingClientRect();
					indicator.value.style.width = width + 'px';
					const {left: left1} = container.value.getBoundingClientRect();
					const {left: left2} = selectedItem.value.getBoundingClientRect();
					const left = left2 - left1;
					indicator.value.style.left = left + 'px';
				});
			});
			
			const defaults = context.slots.default();
			const titles = defaults.map(tag => {
				return tag.props.title;
			});
			const select = (title: string) => {
				context.emit('update:selected', title);
			};
			return {defaults, titles, select, container, indicator, selectedItem};
		}
	};
</script>

<style lang="scss">
	$green: #657c50;
	$color: #333;
	$border-color: #d9d9d9;
	.xc-tabs {
		&-nav {
			display: flex;
			color: $color;
			border-bottom: 1px solid $border-color;
			position: relative;
			&-item {
				padding: 8px 0;
				margin: 0 16px;
				cursor: pointer;
				&:first-child {
					margin-left: 0;
				}
				&.selected {
					color: $green;
				}
			}
			&-indicator {
				position: absolute;
				height: 3px;
				background: $green;
				left: 0;
				bottom: -1px;
				width: 100px;
				transition: all 250ms;
			}
		}
		&-content {
			padding: 8px 0;
			&-item {
				display: none;
				&.selected {
					display: block;
				}
			}
		}
	}
</style>