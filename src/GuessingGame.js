import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function GuessingGame() {
  const [guessed, setGuessed] = useState(0);
  //was set to false
  const [status, setStatus] = useState("");
  const [answer, setAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState(null);

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
  useEffect(() => {
    setRightAnswer(Math.floor(Math.random() * 100) + 1);
  }, [])


  return <div className="col-md-6 col-md-offset-3">
    <h3>I am thinking of a number between 1 and 100. Guess the Lucky Number!</h3>
    <p>You have made { guessed.toString() } guesses</p>
    <form onSubmit={submit}>
      <div>
        <div className="d-grid pt-5 gap-2" >
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </div>
      </div>
      <div className="d-grid pt-5 gap-2" >
        <Button type="submit">Guess</Button>
      </div>
    </form>
    <p>{status}</p>
    <div className="d-grid pt-5 gap-2" >
      <Button onClick={() => {
        setGuessed(0);
        setRightAnswer(Math.floor(Math.random() * 100) + 1);
        setStatus("");
        setAnswer("")
      }} >Reset</Button>
    </div>
  </div>

}
