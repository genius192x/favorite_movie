<template>
	<div class="movie">
		<img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="`${movie.original_title}`"
		class="movie-img">
		<div class="movie__content">
			<div class="movie__text">
				<div class="movie__name">
					{{ movie.original_title }} ({{ movie.release_date }})
				</div>
				<span class="movie-overview">{{ movie.overview }}</span>
			</div>
			<div class="movie__controls" v-if="!isSearch">
				<button class="movie__control movie__control_style_watched"  	@click="movieStore.toggleWatched(movie.id)">
					<span v-if="!movie.isWatched">Watched</span>
					<span v-else>Unwatched</span>
				</button>
				<button class="movie__control movie-buttons__control_style_delete" @click="movieStore.deleteMovie(movie.id)">
					<span>Delete</span>
				</button>
			</div>
			<div class="movie__controls" v-else>
				<button class="movie__control movie__control_style_watched" @click="searchStore.addToFavorite(movie)">
					<span>Add</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';
const searchStore  = useSearchStore();
const movieStore = useMovieStore()
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
	isSearch:{
		type: Boolean,
		required: false,
		default: ()=>{}
	}
});
</script>

<style lang="css" scoped>
.movie {
  display: flex;
	gap: 20px;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	align-items: center;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
@media (max-width: 768px){
	.movie {
		flex-wrap: wrap;
	}
}
.movie-accept {
  margin-right: 10px;
}
.movie-overview{
	font-weight: 400;
	font-size: 16px;
}
.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie__name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie__controls {
  display: flex;
  align-items: center;
	gap: 10px;
  justify-content: center;
}
.movie__content{
	flex: 1 1 ;
}
.movie__control{
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
}
.movie__control_style_watched {
  color: #fff;
  background: #1eb4c3;
}

.movie__control_style_watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons__control_style_delete {
  color: #fff;
  background: #ff2a2a;
}
</style>