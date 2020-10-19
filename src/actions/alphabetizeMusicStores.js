export const alphabetizeMusicStores = () => {
    let attributes = []
    return (dispatch) => {
      dispatch({type: 'LOADING_MUSIC_STORES'})
      fetch('http://127.0.0.1:3000/stores').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        responseJSON.data.map(store => (
          attributes.push(store.attributes)
          ))
        dispatch({type: 'ALPHABETIZE_MUSIC_STORES', musicStores: attributes})
      })
    }
  }