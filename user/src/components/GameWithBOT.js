import React from 'react';
import GameBoardBOT from '../containers/GameBoardBOT'
import GamePlayAgain from '../containers/GamePlayAgain'
import GameMovesSorting from '../containers/GameMovesSorting'
import GameStatus from '../containers/GameStatus'
import GameMovesHistoryBOT from '../containers/GameMovesHistoryBOT'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css' 
import {Navbar} from 'react-bootstrap'

function Game() {
  return (
    <div>
      <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              Caro Việt Nam
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar>
      </div>

      <div className='game'>
        <div className='game-board'>
          <GameBoardBOT></GameBoardBOT>
        </div>

        <div className='game-info btn'>
          <GamePlayAgain></GamePlayAgain>
          <GameMovesSorting></GameMovesSorting>
          <p></p>
          <GameStatus></GameStatus>
          <GameMovesHistoryBOT></GameMovesHistoryBOT>
        </div>
      </div>  
    </div>     
  );
}


export default Game;