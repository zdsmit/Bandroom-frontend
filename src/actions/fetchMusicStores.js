export const fetchMusicStores = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_MUSIC_STORES'})
    fetch('http://localhost:3000').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({type: 'ADD_MUSIC_STORES', musicStores: responseJSON.text})
    })
  }
}