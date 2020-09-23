import React from 'react';
import './App.css';
import MusicStoresContainer from './containers/MusicStoresContainer'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Bandroom!</h1>
      <h2>A resource for finding music stores with up to date inventory</h2>
      <br />
      <MusicStoresContainer />
    </div>
  );
}

export default App;
