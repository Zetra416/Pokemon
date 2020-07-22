const defaultState= {
  favouriteData: [
    {
      name: "bulbasaur",
    },
    {
      name: "charmender",
    },
    {
      name: "squirtle",
    }
    ]
}

export default function favouriteReducer( state= defaultState, action) {
  switch(action.type) {
    case "ADD_FAVOURITE":
      return {...state, favouriteData: action.payload}
    case "REMOVE_FAVOURITE":
      return {...state, favouriteData: action.payload}
    default:
      return state
  }
}
