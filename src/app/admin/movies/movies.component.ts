import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movies';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  pageSize: number = 10;
  currentPage: number = 1;
  totalCount: number = 0;
  movieList: Movie[] | null;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        console.log(params);
        this.currentPage = parseInt(params.page) || 1;

        this.moviesService
          .getMovieListPaging(this.currentPage, this.pageSize)
          .subscribe({
            next: (result: any) => {
              this.movieList = result.items;
              this.totalCount = result.totalCount;
              console.log(this.movieList);
            },
          });
      },
    });
  }

  changePage(pageEvent): void {
    this.router.navigate([], {
      queryParams: { page: pageEvent.pageIndex + 1 },
    });
  }
}