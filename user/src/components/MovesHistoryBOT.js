import React from 'react'

const MovesHistory = ({stepNumber, history, sortAscend, onClick}) => {
    const moves = history.map((step, move) => {
      if (move % 2 === 0)
      {
        const latestMoveRow = 1 + step.row;
        const latestMoveCol = 1 + step.col;
        const desc = move ?
          `Go to move #${move/2} (Row: ${latestMoveRow}, Column: ${latestMoveCol})` :
          'Go to game start'; 
        return (
            <li key={desc}>
              <button className = {move === stepNumber ? 'bold-selected-move border-success moves-btn-padding rounded-pill block-example' : 'border-success moves-btn-padding btn rounded-pill block-example'} onClick={() => onClick(move)}>{desc}</button>
            </li>
        );
      }
      return null;
    });

    if (!sortAscend)
    {
      moves.reverse();
    }
    return (
    <ol>{moves}</ol>
    );
};

export default MovesHistory;