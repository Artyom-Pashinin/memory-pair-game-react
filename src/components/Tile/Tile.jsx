import React from "react";
import "./tile.scss";
import { configurations } from "../../scritps/config";
import { useState } from "react";

export default function Tile(props) {
  const backStyle = {
    backgroundImage: `url('${configurations.backgroundImageUrl}')`,
  };

  let [frontStyle, setFrontStyle] = useState(undefined);
  let [isGuessed, setGuessed] = useState(false);
  let [isOpened, setOpened] = useState(false);
  let [tileClasses, setClass] = useState(["tile", "tile--closed"]);

  function tileClickHandler() {
    if (isOpened || isGuessed) return;
    setOpened = true;
    tileClasses.splice(tileClasses.indexOf("tile--closed"), 1);
    tileClasses.push("tile--opened");
    setFrontStyle({
      backgroundImage: `url('${props.imageURL}')`,
    });
  }

  return (
    <div className={tileClasses.join(" ")} onClick={tileClickHandler}>
      <div className="tile-inner">
        <div className="tile-front" style={frontStyle}></div>
        <div className="tile-back" style={backStyle}></div>
      </div>
    </div>
  );
}
