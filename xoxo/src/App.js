import React from 'react';
import './App.css';
import Board from './components/board';

class App extends React.Component {
  render() {
    function refreshPage() {
      window.location.reload(false);
    }
    return (
      <div className="App">

        {/* <header className="App-header">
          <h1>X vs O</h1>
        </header> */}
        <div className="App-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>
          <button onClick={refreshPage}>Click to reload!</button>
        </div>

      </div>
    );
  }
}

export default App;






// class Game extends React.Component {
//   render() {
//       return (
//           <div className="game">
//               <div className="game-board">
//                   <Board />
//               </div>
//               <div className="game-info">
//                   <div>{/* status */}</div>
//                   <ol>{/* TODO */}</ol>
//               </div>
//           </div>
//       );
//   }
// }
