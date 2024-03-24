import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieDetails } from '../models/movie';
import { ConvertTimeDirective } from '../directives/convert-time.directive';
import { CostDirective } from '../directives/cost.directive';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    ConvertTimeDirective,
    CostDirective,
  ],
  providers: [MovieService],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: string = '';
  movie!: MovieDetails;
  private subscription!: Subscription;

  constructor(
    private activatedRouter: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movieId = this.activatedRouter.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    if (this.movieId) {
      this.getMovieDetails();
    }
  }

  getMovieDetails() {
    this.subscription = this.movieService.getMovieById(this.movieId).subscribe({
      next: (data: MovieDetails) => {
        this.movie = data;
      },
      error: (err) => console.error(err),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
