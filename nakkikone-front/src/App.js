import React, { useState, useEffect } from "react";
import { Board } from "./components/Board";
import MockUsers from "./components/MockUsers";
import { databaseService } from "./functions/databaseService";

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
  const [activeUser, setActiveUser] = useState({});
  const [users, setUsers] = useState();

  console.log(activeUser);

  useEffect(() => {
    databaseService.fetchUsers().then((res) => {
      setUsers(res);
      setActiveUser(res[0]);
    });
  }, []);

  const updateActiveUser = (userData) => {
    setActiveUser(userData);
  };
  return (
    <div className="app">
      <MockUsers users={users} updateActiveUser={updateActiveUser} />
      <header>
        <h1>Nakkikone Board</h1>
      </header>
      <Board activeUser={activeUser} />
    </div>
  );
}
