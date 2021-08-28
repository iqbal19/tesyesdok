<template>	
	<div class="flex flex-col mx-2">
		<div v-for="artikel in artikels" :key="artikel.id">
			<nuxt-link :to="{name:'artikel-name', params: {name:artikel.title}}" class="flex flex-row pb-8">
				<div class="w-full md:w-1/3 lg:w-1/3">
	  				<figure class="h-60 w-full relative">
	  					<img :src="artikel.image" class="h-full w-full rounded-lg">
	  					<div class="absolute px-2 bottom-4 text-gray-700 mx-4 lg:hidden md:hidden">
	  						<div class="flex flex-row pb-4 text-xs left-0">
								<nuxt-link :to="{name:'category-name', params: {name:artikel.category}}">
									<p class="bg-yellow-400 font-bold text-white mx-1 rounded-lg px-4 py-1 uppercase">{{artikel.category}}</p>
								</nuxt-link>
								<p class="bg-white font-bold text-blue-900 mx-1 rounded-lg px-4 py-1">{{artikel.date_post}}</p>
							</div>
							<div class="bg-white px-2">
								<h1 class="uppercase font-semibold">{{artikel.title}}</h1>
							</div>
	  					</div>
	  				</figure>
				</div>
				<div class="hidden lg:block md:block lg:w-2/3">
					<div class="pl-4">
						<label class="text-gray-800 font-semibold text-2xl cursor-pointer">{{artikel.title}}</label>
						<p class="pt-4 text-gray-700 text-lg">{{artikel.description.substring(0, 200)}}.....</p>
						<div class="pt-8 flex flex-row">
							<nuxt-link :to="{name:'category-name', params: {name:artikel.category}}">
								<p class="bg-yellow-400 font-semibold text-white mx-2 rounded-full px-10 py-1 uppercase">{{artikel.category}}</p>
							</nuxt-link>
							<nuxt-link to="">
								<p class="border border-blue-900 text-blue-900 mx-2 rounded-full px-10 py-1">{{artikel.date_post}}</p>
							</nuxt-link>
						</div>
					</div>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		computed: {
		    ...mapState('artikel', {
		    	artikels : state => state.listArtikel
		    })	
		},
	}
</script>