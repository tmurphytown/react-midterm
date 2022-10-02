import React from "react";
import { Button } from "react-bootstrap";
import { usePersistence } from "./UsePersistence";


export function GuessingGame() {
  const [guessed, setGuessed] = usePersistence("guessed", 0);
  const [status, setStatus] = usePersistence("status", "");
  const [answer, setAnswer] = usePersistence("answer", "");
  const [rightAnswer, setRightAnswer] = usePersistence('rightAnswer', Math.floor(Math.random() * 100) + 1);



  console.log(rightAnswer);
  const submit = (e) => {
    e.preventDefault();
    const formValid = answer >= 0;
    if (!formValid) {
      return;
    }
    setGuessed(guessed + 1);
    if (+answer === rightAnswer) {
      setStatus("Congrats you guessed it!");
    } else if (+answer < rightAnswer) {
      setStatus("Number is too low");
    } else {
      setStatus("Number is too high");
    }
  };



  
  return <div className="col-md-6 col-md-offset-3 justify-center">
      <h3 class="text-center">I am thinking of a number between 1 and 100.</h3>
      <h5 class="text-center">Guess the Lucky Number!</h5>
      <p class="text-center">You have made {guessed.toString()} guesses</p>
      <form onSubmit={submit}>
        <div>
          <div className="d-grid pt-5 gap-2" >
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} style={{color: "white", backgroundColor: "transparent", border:"4px solid #139d08", padding: "0.5rem"}}/>
          </div>
        </div>
        <div className="d-grid pt-5 gap-2" >
          <Button type="submit" style={{backgroundColor: "#139d08", borderRadius: 0, border: "none", marginBottom: "20px"}}>Guess</Button>
        </div>
      </form>
      <p class="text-center" style={status !== "Congrats you guessed it!" ? {color: "#FF5555"} : {}}>{status}</p>
      <div className="d-grid pt-5 gap-2" >
        <Button className="spaceinvader-button" onClick={() => {
          setGuessed(0);
          setRightAnswer(Math.floor(Math.random() * 100) + 1);
          setStatus("");
          setAnswer("");
        }} style={{backgroundColor: "#139d08", borderRadius: 0, border: "none"}} >Reset</Button>
      </div>
  </div>
}
