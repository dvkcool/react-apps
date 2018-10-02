import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      board : Array(9).fill(null),
      player: "X"
    }
  }

  checkwinner(){
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]

    ]

    for(let index=0; index < winLines.length; index++){
      const [a, b, c] = winLines[index];
      if( this.state.board[a]  && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert('You won');
        this.setState({
          winner: this.state.player
        })
      }
    }

  }


  handleClick(index){

    if(!this.state.board[index] && !this.state.winner){
      let temp = this.state.board;
      temp[index] = this.state.player;
      let newplayer = this.state.player === "X" ? "O" : "X"
      this.setState({
        board: temp,
        player: newplayer
      })
      this.checkwinner();
    }

  }
  render() {
    const Boxes = this.state.board.map(
      (box, index) =>
      <div className="box"
      key={index}
      onClick={() => this.handleClick(index)}>{box}</div>)
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
