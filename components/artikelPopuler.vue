<template>
	<div class="flex flex-col ml-4">
		<div v-for="pop in artikelPopuler">
			<nuxt-link :to="{name:'artikel-name', params: {name:pop.title}}" class="flex flex-row mb-6">
				<div class="w-1/3">
					<div class="h-60 w-full">
						<img :src="pop.image" class="h-full w-full rounded-lg">
					</div>
				</div>
				<div class="w-2/3 relative">
					<div class="pl-4">
						<label class="text-gray-800 font-semibold text-xl cursor-pointer">{{pop.title}}</label>
						<div class="pt-8 flex flex-row px-4 text-xs absolute bottom-2 left-0">
							<nuxt-link :to="{name:'category-name', params: {name:pop.category}}">
								<p class="bg-yellow-400 font-semibold text-white mx-1 rounded-full px-4 py-1 uppercase">{{pop.category}}</p>
							</nuxt-link>
							
							<p class="border border-blue-900 text-blue-900 mx-1 rounded-full px-4 py-1">{{pop.date_post}}</p>
						</div>
					</div>
				</div>
			</nuxt-link>
		</div>
			
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters('artikel', ['artikelPopuler']),
		}
	}
</script>