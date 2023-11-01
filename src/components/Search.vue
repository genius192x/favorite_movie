<template>
	<form @submit.prevent="searchStore.getMovies(searchMovie)" class="search__form">
		<input type="text" class="search__input" placeholder="film" v-model="searchMovie">
	</form>
	<loader v-if="searchStore.loader === true"/>
	<div v-else>
		<div class="movie-item" v-for="movie of searchStore.movies" :key="movie.id">
				<Movie :movie="movie" :is-search="true"/>
			</div>
	</div>
</template>

<script setup>
import Movie from './Movie.vue';
import { ref } from 'vue';
import loader from '../components/loader.vue'
import {useSearchStore} from '../stores/SearchStore'
const searchStore = useSearchStore()
const searchMovie = ref("")

</script>

<style scoped>
.search__input{
	width: 100%;
	height: 30px;
	border-radius: 10px;
	border: 1px solid #e7e7e7;
	padding: 0px 10px;
}
.search__input::placeholder{
	opacity: 0.6;
}
</style>