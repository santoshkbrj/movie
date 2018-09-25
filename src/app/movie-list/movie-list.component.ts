import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  
  constructor(public movieService:MovieService) {
       // get upcoming movies
       this.movieService.getUpcomingMovies().subscribe(data => {
        this.upcoming_movies = data['results'];
        // console.log(this.upcoming_movies);
      });
  
      // get popular movies
      this.movieService.getPopularMovies().subscribe(data => {
        this.popular_movies = data['results'];
        // console.log(this.popular_movies);
      });
  
    }
  
    // get search results of movies
    searchMovies() {
      this.movieService.searchMovie(this.movie).subscribe(data => {
        this.search_result = data['results'];
        // console.log(this.search_result);
      });
   }

  ngOnInit() {
  }

}
