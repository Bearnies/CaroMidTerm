import React from 'react';
import GameBoard from '../containers/GameBoard'
import GamePlayAgain from '../containers/GamePlayAgain'
import GameMovesSorting from '../containers/GameMovesSorting'
import GameStatus from '../containers/GameStatus'
import GameMovesHistory from '../containers/GameMovesHistory'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap'

function Game(user) {
  return (
    <div>
      <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              Caro Việt Nam
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand  href='/profile'>
                {`Signed in as: ${user.username}`}
              </Navbar.Brand>
            </Navbar.Collapse>
          </Navbar>
      </div>

      <div className='game'>
        <div className='game-board'>
          <GameBoard></GameBoard>
        </div>

        <div className='game-info btn'>
          <GamePlayAgain></GamePlayAgain>
          <GameMovesSorting></GameMovesSorting>
          <p></p>
          <GameStatus></GameStatus>
          <GameMovesHistory></GameMovesHistory>
        </div>
      </div>  
    </div>     
  );
}


export default Game;