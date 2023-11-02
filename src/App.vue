<template>
	<header>
		<h1>My Favorite movies</h1>
	</header>
	{{ movieStore.moviesOnLocalStorage }}
	<main>
		
		<div class="tabs">
			<button :class="['button', {button_state_active: movieStore.activeTab === 1}]" @click="movieStore.setActiveTab(1)">
				favorite
			</button>
			<button :class="['button', {button_state_active: movieStore.activeTab === 2}]" @click="movieStore.setActiveTab(2)">
				Search
			</button>
		</div>
		<div class="movies" v-if="movieStore.activeTab === 1">
			<div>
				<h3>Watched movies</h3>
				<div class="movie-item" v-for="movie of movieStore.watchedMovies" :key="movie.id">
					<Movie :movie="movie"/>
				</div>
			</div>
			<div>
				<h3>All movies  (count: {{ movieStore.totalCountMovies }})</h3>
				<div class="movie-item" v-for="movie of movieStore.movies" :key="movie.id" >
					<Movie :movie="movie" v-if="movie.isWatched === false"/>
				</div>
			</div>
			
			
		</div>
		<div class="search" v-else>
			<Search/>
		</div>
	</main>
  
</template>


<script setup>
import Search from './components/Search.vue';
import Movie from './components/Movie.vue';
import { watch } from 'vue';
import { useMovieStore } from './stores/MovieStore';
const movieStore = useMovieStore();
const moviesInLocalStorage = localStorage.getItem("movies");
if (moviesInLocalStorage) {
	console.log(movieStore.movies);
	movieStore.activeTab = 1
	movieStore.movies = JSON.parse(moviesInLocalStorage);
}

watch(
    () => movieStore.movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );
</script>



<style lang="css">
.tabs{
	display: flex;
	gap: 10px;
}
.button{
	font-size: 19px;
	background: transparent;
	padding: 5px 10px;
	border-radius: 5px;
	font-weight: 400;
	transition: all 0.3s ease 0s;
	border: 1px solid #DADADA;
}
.button_state_active{
	font-size: 19px;
	background: teal;
	color: white;
	padding: 5px 10px;
	font-weight: 400;
	border: 1px solid #DADADA;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
