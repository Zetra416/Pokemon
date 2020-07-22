import React from 'react';
import './Pokemon.css';
import PokemonList from '../../components/PokemonList/PokemonList';

export default function Pokemon (){
  return(
    <div>
      <h2>Pokemon Page</h2>
      <PokemonList title="Pokemon List"/>
    </div>

  )
}
