<template>
	<div>
		<Navbar />
		<div>
			<Nuxt />
		</div>
	</div>
</template>

<script>
	import Navbar from "~/components/navbar.vue"

	export default {
		components : {
			Navbar
		}
	}
</script>