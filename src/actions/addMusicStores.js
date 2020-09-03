export const fetchMusicStores = () => {
    return (dispatch) => {
      dispatch({type: 'LOADING_MUSIC_STORES'})
      fetch('http://localhost:3000', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({type: 'ADD_MUSIC_STORES', musicStores: responseJSON})
      })
    }
}