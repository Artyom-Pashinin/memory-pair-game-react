import React from "react";
import Tile from "../Tile/Tile";
import "./board.scss";
import { configurations } from "../../scritps/config";
import { shuffleArrayRandomly } from "../../scritps/helpers";

export default function Board() {
  let boardWidth = configurations.layouts[0].x;
  let boardHeight = configurations.layouts[0].y;
  let numberOfTiles = boardWidth * boardHeight;

  const boardStyle = {
    gridTemplateRows: `repeat(${boardHeight}, var(--tile-height-large))`,
    gridTemplateColumns: `repeat(${boardWidth}, var(--tile-width-large))`,
  };

  function generateListOfImages() {
    let shuffledArr = [
      ...shuffleArrayRandomly(configurations.imageSets.imageSetIT),
    ];
    shuffledArr.splice(0, shuffledArr.length - numberOfTiles / 2);
    return shuffledArr;
  }

  function generateTiles() {
    let result = [];
    let images = generateListOfImages();
    for (let i = 0, id = 100; i < numberOfTiles / 2; i++) {
      for (let j = 0; j < 2; j++) {
        result.push(
          <Tile
            key={id}
            imageID={i}
            imageURL={configurations.imagesFolderUrl + images[i]}
          />
        );
        id += 1;
      }
    }
    return result;
  }

  return (
    <div className="board" style={boardStyle}>
      {generateTiles()}
    </div>
  );
}
