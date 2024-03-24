import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { ConvertTimeDirective } from '../directives/convert-time.directive';
import { RouterLink } from '@angular/router';
import { CostDirective } from '../directives/cost.directive';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConvertTimeDirective,
    CostDirective,
    RouterLink,
  ],
  providers: [MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnDestroy {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  releaseYrFilter: string = '';
  private subscription!: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.subscription = this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
        this.applyFilters();
      },
      error: (err) => console.error(err),
    });
  }

  applyFilters() {
    this.filteredMovies = this.movies.filter((movie: Movie) => {
      const releaseYr = new Date(movie.release_date).getFullYear().toString();
      const titleWatch = movie.title
        .toLowerCase()
        .includes(this.titleFilter.toLowerCase());
      const releaseYrWatch = releaseYr.startsWith(this.releaseYrFilter ?? '');
      return titleWatch && releaseYrWatch;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
