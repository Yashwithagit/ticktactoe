import React from 'react';
import Board from './components/Board';
import './styels/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TIC TA TOE</h1>
      <Board />
    </div>
  );
};
export default App;
