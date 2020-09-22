export const deleteInstruments = (id) => {
    return() => {
      fetch(`http://127.0.0.1:3000/instruments/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
    }
  }