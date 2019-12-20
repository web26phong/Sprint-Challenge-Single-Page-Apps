import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Header from "./Header";

const Character = (props) => {
    const [char, setChar] = useState();
    const {id} = useParams();

    useEffect(() => {
        // const id = 1;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook
    
           axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
              setChar(response.data);
            })
            .catch(error => {
              console.error(error);
            });
    
      },[id]);

      if (!char) {
        return <div>Loading char information...</div>;
      }

    return (
        <div>
            <Header />
            <CharacterCard key={char.id} char={char}/>
        </div>
        
    );
}

export default Character;