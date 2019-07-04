import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = props => {
  if (props.a > 0) {
    return (
      <div>
        <table>
          <Statistic name="good" value={props.g} />
          <Statistic name="neutral" value={props.n} />
          <Statistic name="bad" value={props.b} />
          <Statistic name="all" value={props.a} />
          <Statistic
            name="average"
            value={(props.g + props.b * -1) / props.a}
          />
          <Statistic
            name="positive %"
            value={(props.g * 100) / (props.g + props.n + props.b)}
          />
        </table>
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = props => {
  return <button onClick={props.handler}>{props.name}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={handleGood} name="good" />
      <Button handler={handleNeutral} name="neutral" />
      <Button handler={handleBad} name="bad" />

      <h1>statistics</h1>

      <Statistics g={good} n={neutral} b={bad} a={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
