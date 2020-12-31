export const addInstruments = (data) => {
    return (dispatch) => {
      fetch('http://127.0.0.1:3000/instruments', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          instrument_type: data.type,
          store_id: data.storeId
        })
      })
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({type: 'ADD_INSTRUMENTS', instrument: responseJSON.data.attributes})
      })
    }
  }