import React from "react";
import { GuessingGame } from "./GuessingGame";

export default function App() {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000000',
    color: '#139d08',
    fontFamily: "'Press Start 2P', cursive",
  };
return (<div id="root">
  <div className="App">
  <div style={styles}>
    <GuessingGame />
  </div>
</div>
</div>
);
}