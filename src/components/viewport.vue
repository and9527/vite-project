<template>
	<canvas
		style="margin: 5px; width: 97%; height: 97%; border: 1px solid #000000"
		@drop="onDrop($event)"
		@dragover.prevent
		@mousedown.left="debounce(canvasDown($event), 200)"
		@mousemove="canvasMove($event)"
		@mouseup.left="canvasUp($event)"
		ref="canvas"
	/>
</template>
<script>
export default {
	methods: {
		onDrop(event) {
			const uuid = event.dataTransfer.getData('data');
			const findProduct = this.$store.state.browser.products.find((p) => p.uuid === uuid);
			if (findProduct) {
				this.$store.commit('addGraphic', {
					layerId: this.$store.state.viewport.currentLayer,
					graphicObj: findProduct.spec,
				});
				this.canvasUp(event, findProduct.spec);
			}
		},
		canvasMove(e) {
			if (!this.$store.getters.getCurrentLayer) return;
			const canvas = this.$refs.canvas;
			let pos = this.getMousePosition(canvas, e);
		},
		canvasUp(e, graphic) {
			if (!this.$store.getters.getCurrentLayer) return;
			const canvas = this.$refs.canvas;
			const pos = this.getMousePosition(canvas, e);
			const findGraphics = this.$store.getters.getCurrentLayer.graphics.find(
				(s) => s.id === graphic.id,
			);
			findGraphics && findGraphics?.Paint(canvas);
		},
		async canvasDown(e) {
			if (!this.$store.getters.getCurrentLayer) return;
			const pos = this.getMousePosition(this.$refs.canvas, e);
		},
		debounce(func, wait, immediate) {
			var timeout;
			return function () {
				let context = this;
				let args = arguments;
				let later = function () {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				let callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},
		getMousePosition(canvas, evt) {
			let rect = canvas.getBoundingClientRect();
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top,
			};
		},
	},
	computed: {},
};
</script>
<style scoped lang="scss"></style>
