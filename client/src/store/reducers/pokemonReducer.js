const defaultState = {
  pokemonData: []
}

export default function pokemonReducer(state= defaultState, action) {
  switch(action.type) {
    case "GET_POKEMON":
      return {...state, pokemonData: action.payload};
    case "NEXT":
      return {...state, pokemonData: action.payload};
    default:
      return state;
  }
}
