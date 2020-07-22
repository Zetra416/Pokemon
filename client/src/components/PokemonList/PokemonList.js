import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPokemon, nextPage} from '../../store/actions/pokemonAction';
import './PokemonList.css'

export default function PokemonList(props) {
  let offset= 0;

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemonReducer.pokemonData)
  let url = `https://pokeapi.co/api/v2/pokemon?limit=21`

  function next(){
    dispatch(
      nextPage()
    )
  }

  const prev= () => {
    console.log("prev");
    offset-=10;
    url += `&offset=${offset}/`
  }

  useEffect(()=> {
    dispatch(
      getPokemon(url)
    )
    // eslint-disable-next-line
  }, [url])

  return (
    <div className="all-pokemon">
      <ol>
      {pokemons.map((poke, index) => {
        let url = `https://pokeres.bastionbot.org/images/pokemon/${index +1}.png`;
        return(
          <div className="pokemon-card" key={index}>
          <img className="image" src={url}/>
          <h3 className="name">{poke.name}</h3>
          </div>
        )
      })}
      </ol>
      <button onClick={prev} >prev</button>
      <button onClick={next} >next</button>
    </div>
  )
}
