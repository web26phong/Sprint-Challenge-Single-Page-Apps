import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          const results = response.data.results.filter(char =>
          char.name.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getChars();
  }, [searchTerm]);

  return (
    <section className="character-list">
      <form>
        <label htmlFor="search">Search for a character: </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="enter a name here to search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      {searchResults.map(char => (
        <Link to={`/character/${char.id}`}>
          <CharacterCard key={char.id} id={char.id} char={char}/>
        </Link>
      ))}
    </section>
  );
}
