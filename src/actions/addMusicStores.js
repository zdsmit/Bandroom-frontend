export const addMusicStores = () => {
    return (dispatch) => {
      console.log(dispatch)
      fetch('http://localhost:3000', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dispatch)
      })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
        dispatch({type: 'ADD_MUSIC_STORES', musicStores: responseJSON})
      })
    }
}

