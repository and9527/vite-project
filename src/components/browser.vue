<template>
	<div>
		<div
			v-for="(product, index) in $store.state.browser.products"
			:key="index"
			draggable="true"
			@dragstart="
				startDrag($event, {
					uuid: product.uuid,
				})
			"
		>
			{{ product.productName }}
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		startDrag(evt, product) {
			evt.dataTransfer.dropEffect = 'move';
			evt.dataTransfer.effectAllowed = 'move';
			evt.dataTransfer.setData('data', product.uuid);
		},
	},
};
</script>

<style scoped></style>
