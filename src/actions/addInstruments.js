export const addInstruments = (dispatch) => {
    return () => {
      fetch('http://127.0.0.1:3000/instruments', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type: dispatch.type,
          store_id: dispatch.storeId
        })
      })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
      })
    }
  }