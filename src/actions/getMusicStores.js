export const getMusicStores = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_MUSIC_STORES'})
    fetch('http://127.0.0.1:3000/stores').then(response => {
      return response.json()
    }).then(responseJSON => {
      //dispatch({type: 'GET_MUSIC_STORES', musicStores: responseJSON.text})
      console.log(responseJSON)
    })
  }
}