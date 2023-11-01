import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
export const useMovieStore = defineStore('movieStore', {
	state : ()=>({
		movies: [],
    activeTab: 2,

	}),
	actions: {
		setActiveTab(id){
			this.activeTab = id
		},
		toggleWatched(id){
			const idx = this.movies.findIndex( el => el.id === id);
			this.movies[idx].isWatched = !this.movies[idx].isWatched;
		},
		deleteMovie(id){
			this.movies = this.movies.filter(el => el.id !== id)
		},
	},
	getters:{
		watchedMovies(){
			return this.movies.filter((el) => el.isWatched === true)
		},
		totalCountMovies(){
			return this.movies.length
		},
		
	},
	
})