import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  let ediatblePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    ediatblePlayerName = <input type="text" value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
      <span className="player">
        {ediatblePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
