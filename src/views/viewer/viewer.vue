<template>
	<v-navigation-drawer>
		<browser />
	</v-navigation-drawer>
	<v-main>
		<viewport />
	</v-main>
</template>

<script>
import Viewport from '@/components/viewport.vue';
import Browser from '@/components/browser.vue';

export default {
	name: 'viewer',
	components: { Browser, Viewport },
	mounted() {
		this.$store.dispatch('getProducts');
	},
};
</script>

<style scoped></style>
