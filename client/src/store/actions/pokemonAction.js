export function getPokemon(url) {
  return(dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      dispatch ({
        type: 'GET_POKEMON',
        payload: data.results
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch pokemon data');
    })
  }
}

export function nextPage(offset) {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`
  return(dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      dispatch({
        type: "NEXT",
        payload: data.results
      })
    })
    .catch(err=> {
      console.log(err, "failed to next data");
    })
  }
}
