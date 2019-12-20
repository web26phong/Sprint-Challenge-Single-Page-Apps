import React from "react";
import {Card, Stat, StatContainer} from "../Styles.js"

export default function CharacterCard(props) {
  const {name, status, species, gender, type} = props.char;
  
  return (
    <Card>
        <StatContainer>{name}</StatContainer>
        <StatContainer>
          <Stat>Status: {status}</Stat>
          <Stat>Species: {species}</Stat>
          <Stat>Type: {type}</Stat>
          <Stat>Gender: {gender}</Stat>
        </StatContainer>
        
    </Card>
  );
}
