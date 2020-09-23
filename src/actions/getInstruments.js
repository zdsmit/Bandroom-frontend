export const getInstruments = () => {
    let attributes = []
    return (dispatch) => {
      dispatch({type: 'LOADING_INSTRUMENTS'})
      fetch('http://127.0.0.1:3000/instruments').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        responseJSON.data.map(store => (
          attributes.push(store.attributes)
          ))
        dispatch({type: 'GET_INSTRUMENTS', instruments: attributes})
      })
    }
  }