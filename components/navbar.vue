<template>
<div>
	<div class="fixed w-full z-10 top-0 text-white bg-blue-900">
	  <div class="flex flex-col max-w-screen-xl px-1 mx-auto lg:items-center lg:justify-between lg:flex-row md:px-4 lg:px-8">

	    <div class="p-5 flex flex-row items-center justify-between">
	      <nuxt-link to="/" class="text-xl font-bold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">YESDOK</nuxt-link>
	      <button class="lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
	        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
	          <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
	          <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
	        </svg>
	      </button>
	    </div>

	    <div :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 lg:flex lg:justify-end lg:flex-row">
	    	<div v-for="cate in categorys">
	    		<nuxt-link :to="{name: 'category-name', params: {name:cate.catagory_name}}" class="px-4 mx-2 py-2 mt-2 text-lg font-semibold bg-transparent text-white rounded md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline uppercase">{{cate.catagory_name}}</nuxt-link>
	    	</div>
	      
	    </div>
	  </div>
	</div>
</div>
</template>

<script>
	import category  from "~/data/category.json"
	export default {
	    data(){
			return {
				dropdown: false,
				open: false,
				categorys: category
			}
		}
	}
</script>