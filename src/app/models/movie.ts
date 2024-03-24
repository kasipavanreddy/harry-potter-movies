export interface Movie {
  budget: string;
  duration: string;
  id: string;
  release_date: string;
  title: string;
}

export interface MovieDetails extends Movie {
  box_office: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}
