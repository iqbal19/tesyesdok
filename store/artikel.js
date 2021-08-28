import artikel from "~/data/artikels.json"

export const state = () => ({
	artikels : artikel,
	listArtikel : [],
	artikelId : []
});

export const getters = {
    artikelPopuler(state){
        return state.artikels.filter(function(item){
            return item.populer == true
        })
    }
}

export const mutations = {
	setAllArtikel (state, payload){
		state.listArtikel = state.artikels
	},
	setArtikelKategori (state, payload){
		let artikelKate = state.artikels.filter(function(item){
			return item.category == payload
		})
		state.listArtikel = artikelKate;
	},
	setArtikelDetails (state, payload){
		let artikelDetail = state.artikels.filter(function(item){
			return item.title == payload
		})
		state.artikelId = artikelDetail[0];
	}
	
}
