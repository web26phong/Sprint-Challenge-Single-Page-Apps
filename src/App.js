import React from "react";
import Header from "./components/Header.js";
import {Route, Switch} from "react-router-dom";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <Switch>
      <Route path="/character/:id">
        <Character />
      </Route>
      <Route path="/">
        <Header />
        <CharacterList />
      </Route>
    </Switch>
  );
}
