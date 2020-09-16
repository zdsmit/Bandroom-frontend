export const deleteMusicStores = (id) => {
  return() => {
      fetch(`http://127.0.0.1:3000/stores/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
  }
}