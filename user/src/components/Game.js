import React from 'react';
import GameBoard from '../containers/GameBoard'
import GamePlayAgain from '../containers/GamePlayAgain'
import GameMovesSorting from '../containers/GameMovesSorting'
import GameStatus from '../containers/GameStatus'
import GameMovesHistory from '../containers/GameMovesHistory'
import 'bootstrap/dist/css/bootstrap.css';

function Game(username) {
  return (
    <div className = 'game'>
      <div>{`Signed in as: ${username.username}`}</div>
      <div className = 'game-board'>
        <GameBoard></GameBoard>
      </div>

      <div className = 'game-info btn'>
        <GamePlayAgain></GamePlayAgain>
        <GameMovesSorting></GameMovesSorting>
        <p></p>
        <GameStatus></GameStatus>
        <GameMovesHistory></GameMovesHistory>
      </div>
    </div>       
  );
}


export default Game;