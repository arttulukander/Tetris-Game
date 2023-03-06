import { useState, useEffect } from "react";

import { builtBoard, nextBoard } from "/src/business/Board";

export const useBoard = ({ 
    rows, 
    columns, 
    player, 
    resetPlayer, 
    addLinesCleared
}) => {
    const [board, setBoard] = useState(builtBoard({ rows, columns }));

useEffect(() => {
    setBoard((previousBoard) => 
        nextBoard({
            board: previousBoard,
            player,
            resetPlayer,
            addLinesCleared
        })
    );
}, [player, resetPlayer, addLinesCleared]);

    return [board];
};