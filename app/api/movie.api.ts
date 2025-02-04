import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "config/api.config";
import { IMovie } from "shared/types/movie.types";


   export const movieApi = createApi({
     reducerPath: "products",
     baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
     endpoints: (build) => ({
       getMovies: build.query<IMovie, number>({
         query: (limit) => `movie?limit=${limit}`
      }),
     }),
    });

    export const { useGetMoviesQuery } = movieApi