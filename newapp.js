import React, { useState } from "react";
import "./napp.css";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {
  const [character, setCharacter] = useState(null);

  const generateInfo = () => {
    const randomNumber = getRandomInt(1, 88);
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          height: data.height,
          mass: data.mass,
          hairColor: data.hair_color,
          skinColor: data.skin_color,
          eyeColor: data.eye_color,
          imageUrl: `https://starwars-visualguide.com/assets/img/characters/${randomNumber}.jpg`
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="container">
      <h1>Random Star Wars Character Information</h1>
      <button onClick={generateInfo}>Generate Info</button>
      {character && (
        <div className="info">
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Height:</strong> {character.height} cm</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Hair Color:</strong> {character.hairColor}</p>
          <p><strong>Skin Color:</strong> {character.skinColor}</p>
          <p><strong>Eye Color:</strong> {character.eyeColor}</p>
          {character.imageUrl && (
            <img src={character.imageUrl} alt="Character" className="characterImage" />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
