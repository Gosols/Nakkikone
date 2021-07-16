import React from "react";
import { Board } from "./components/Board";

/*
-- Snippets --
imp
enf
--

GET
POST
PUT
DELETE

https://nakkikone-app.herokuapp.com/tickets/{id} 
https://nakkikone-app.herokuapp.com/users/{id} 
 
 */

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Nakkikone Board</h1>
      </header>
      <Board />
    </div>
  );
}
