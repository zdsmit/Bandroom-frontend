export const deleteMusicStores = (id) => {
  return(dispatch) => {
    fetch(`http://127.0.0.1:3000/stores/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => dispatch({type: 'DELETE_MUSIC_STORE', id: id}))
  }
}