import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export function fetchPokemon() {
  return {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('Error', error)
    })
  }
}