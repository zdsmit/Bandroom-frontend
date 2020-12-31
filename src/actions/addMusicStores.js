export const addMusicStores = (data) => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3000/stores', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        owner: data.owner,
        location: data.location
      })
    })
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON.data.attributes)
      dispatch({type: 'ADD_MUSIC_STORES', musicStore: responseJSON.data.attributes})
    })
  }
}