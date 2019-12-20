import React from "react";

export default function CharacterCard(props) {
  const {name, status, species, gender} = props.char;
  
  return (
    <div>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
    </div>
  );
}
