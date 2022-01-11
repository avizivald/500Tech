import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';

const Trailer = ({ data }) => (
  <a href={data.url}
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const PokemonName = ({ data }) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;

const moviesConfig = [
  {
    title: 'id',
    field: 'imdbID'
  },
  {
    title: 'title',
    field: 'Title'
  },
  {
    title: 'rating',
    field: 'imdbRating',
  },
  {
    title: 'plot',
    field: 'Plot',
  },
  {
    title: 'actors',
    field: 'Actors',
  },
  {
    title: 'poster',
    field: 'Poster',
  },
  {
    title: 'imdbVotes',
    field: 'imdbVotes',
  },
  {
    title: 'response',
    field: 'Response',
  },
  {
    title: 'type',
    field: 'Type',
  },
  {
    title: 'writer',
    field: 'Writer',
  },
  {
    title: 'director',
    field: 'Director',
  },
  {
    title: 'genre',
    field: 'Genre',
  },
  {
    title: 'runtime',
    field: 'Runtime',
  },
  {
    title: 'released',
    field: 'Released',
  },
  {
    title: 'rated',
    field: 'Rated',
  },
  {
    title: 'year',
    field: 'Year',
  },
 {
   title: 'trailer',
   field: 'Trailer',
   component: Trailer
 }
];

const pokemonConfig = [
  {
    title: 'pokedex #',
    field: 'number'
  },
  {
    title: 'Url',
    field: 'url'
  },
  {
    title: 'name',
    field: 'name',
    component: PokemonName
  },
];

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid config={moviesConfig} data={movies} />
    <h2>Pokemon</h2>
    <Grid config={pokemonConfig} data={pokemon} />
  </div>
);

export default App;
