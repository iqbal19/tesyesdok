<template>
	<div class="mt-24 max-w-screen-xl mx-auto px-1 lg:px-8 md:px-4">
		<div class="flex flex-row">
			<div class="w-full lg:w-2/3">
				<label class="text-2xl text-blue-900 font-medium mx-2 uppercase">Semua Artikel</label>
				<Artikels class="pt-6"></Artikels>
			</div>
			<div class="hidden lg:block md:block w-1/3">
				<label class="text-2xl text-blue-900 font-medium mx-2 uppercase">Artikel Popular</label>
				<ArtikelPopuler class="pt-6"></ArtikelPopuler>
			</div>
		</div>
	</div>
</template>

<script>
	import Artikels from "~/components/artikels.vue";
	import ArtikelPopuler from "~/components/artikelPopuler"
	export default {
		components : {
			Artikels,
			ArtikelPopuler
		},
		async asyncData({store, params}){
		    await Promise.all([
		      store.commit('artikel/setAllArtikel', params.name)
		    ])
		    return
		},
	}
</script>
