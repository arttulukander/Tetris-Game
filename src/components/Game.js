import Menu from "/src/components/Menu";
import Tetris from "/src/components/Tetris";
import { useGameOver } from "src/hooks/useGameOver";

const Game = ({ rows, colums }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver

    const start = () => resetGameOver();

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start}/>
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
                <p>Tetris</p>
            })
            <Menu onClick={start} />
            rows {rows}, columns {columns}
        </div>
    );
};

export default Game;