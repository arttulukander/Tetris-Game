import React from "react";

import Preview from "/src/somponents/Preview";

const Previews = ({ tetrominoes }) => {
    //everything except the last one
    const previewTetrominioes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

    return (
        <>
            {previewTetrominioes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    );
};

export default React.memo(Previews);