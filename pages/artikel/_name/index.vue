<template>
	<div class="mt-20 max-w-screen-xl mx-auto px-1 lg:px-40 md:px-4">
		<div class="grid justify-items-center">
			<div class="">
				<img :src="artikelId.image" class="w-full h-full">
			</div>
		</div>
		<div class="">
			<nuxt-link :to="{name:'category-name', params: {name:artikelId.category}}" class="grid justify-items-start my-6"> 
				<p class="bg-yellow-400 text-xl font-semibold text-white mx-2 rounded px-10 py-2 uppercase">{{artikelId.category}}</p>
			</nuxt-link>
			
			<h1 class="px-3 text-4xl font-bold uppercase text-blue-900">{{artikelId.title}}</h1>
			<div class="my-6 px-3">
				<p class="text-gray-600 text-xl">Ditulis Oleh <strong>{{artikelId.autor}}</strong></p>
				<p class="text-gray-600 text-lg mb-6">Tanggal <strong>{{artikelId.date_post}}</strong></p>
				<p class="text-gray-700 lg:text-xl align-middle">{{artikelId.description}}</p>
			</div>
			<div class="my-6 px-3">
				<label class="text-2xl font-bold text-gray-600">Bagikan Ke Media Sosial</label>
				<div class="flex flex-col md:flex-row my-4">
					<button class="bg-blue-900 w-40 py-3 text-white font-bold">Facebook</button>
					<button class="bg-green-600 w-40 py-3 text-white font-bold">WhatApp</button>
					<button class="bg-blue-600 w-40 py-3 text-white font-bold">Twitter</button>
					<button class="bg-red-600 w-40 py-3 text-white font-bold">Email</button>
					<button class="bg-blue-800 w-40 py-3 text-white font-bold">Linked ln</button>
				</div>
			</div>
			<div class="my-6 px-3">
				<label class="text-2xl font-bold text-gray-600">Artikel Lainnya</label>
				<div class="flex flex-col md:flex-row my-4">
					<Artikels></Artikels>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import Artikels from "~/components/artikels.vue";

	export default {
		head() {
		    return {
		        title: 'YesDok | ' + this.$route.params.name,
		        meta: [
		          {
		            hid: 'description',
		            name: 'description',
		            content: this.artikelId.description
		          }
		        ]
		    }
	    },
		async asyncData({store, params}){
		    await Promise.all([
		      store.commit('artikel/setArtikelDetails', params.name)
		    ])
		    return
		},
		computed: {
		    ...mapState('artikel', {
		    	artikelId : state => state.artikelId
		    }), 

		},
		mounted() {
			
		},
		created(){
			let kategori = this.artikelId.category
			this.artikelData(kategori)
		},
		methods: {
		    ...mapMutations('artikel',['setArtikelKategori']),
		    artikelData(kategori){
		    	this.setArtikelKategori(kategori)
		    }
		}
	}
</script>