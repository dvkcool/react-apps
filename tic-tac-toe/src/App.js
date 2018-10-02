import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      board : Array(9).fill(null)
    }
  }

  handleClick(e){
    console.log(e.target);
  }
  render() {
    const Boxes = this.state.board.map((box, index) => <div className="box" key={index} onClick={(e) => this.handleClick(e)}>{box}</div>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <div className="Container">
          <h1> Tic Tac Toe game </h1>
          <div className="board">
            {Boxes}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
