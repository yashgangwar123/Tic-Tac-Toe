import React, { useState, useEffect } from "react";
import Login from "./Login";
import Tictactoe from "./tictactoe";
import { firebase } from "./utils/firebase-config";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  //to check state of authentication...this function triggers whenever u login or out
  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
        {user ? (<Tictactoe />) : undefined}
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
