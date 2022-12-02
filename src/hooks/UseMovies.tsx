import React, {useEffect, useState} from 'react';
import MovieDB from '../api/MovieDB';
import {MovieDBMoviesResponsive, Movie} from '../interfaces/MovieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [Conectado, setConectado] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying:[],
      popular:[],
      topRated:[],
      upcoming:[],

  })
 
  const getMovies = async () => {
    const nowPlayingPromise  =  MovieDB.get<MovieDBMoviesResponsive>('/now_playing');
    const popularPromise     =  MovieDB.get<MovieDBMoviesResponsive>('/now_playing');
    const topRatedPromise    =  MovieDB.get<MovieDBMoviesResponsive>('/now_playing');
    const upcomingPromise    =  MovieDB.get<MovieDBMoviesResponsive>('/now_playing');
    
    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    
    setMoviesState({
      nowPlaying:response[0].data.results,
      popular:response[1].data.results,
      topRated:response[2].data.results,
      upcoming:response[3].data.results,
    });

    setConectado(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();

  },[]);
  return {
    ...moviesState,
    Conectado,
  }
};
