import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
const url = "https:api.themoviedb.org/3/search/movie?api_key=82921429797d6c29e7ad48669bdea992&query="
export const useSearchStore = defineStore('searchStore', {
	state : ()=>({
		loader: false,
		movies: [],
	}),
	actions: {
		async getMovies(search){
			this.loader = true
			const res = await fetch(`${url}${search}`)
			const data = await res.json()
			this.movies = data.results
			this.loader = false
		},
		addToFavorite(object){
			const movieStore = useMovieStore();
			const objId = object.id
			console.log(objId);
			if(movieStore.movies.find((el) => el.id === objId)){
				return
			}
			movieStore.movies.push({...object, isWatched: false})
			movieStore.activeTab = 1;
		},
	},
	getters:{
		
	}
})