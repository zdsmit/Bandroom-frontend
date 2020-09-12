export const addMusicStores = (dispatch) => {
  return () => {
    console.log(dispatch)
    fetch('http://127.0.0.1:3000/stores', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: dispatch.name,
        owner: dispatch.owner,
        location: dispatch.location
      })
    })
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON)
    })
  }
}

