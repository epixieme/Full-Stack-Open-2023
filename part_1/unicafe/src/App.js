import { useState } from "react";

const Headers = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Total = ({ clicks, text }) => (
  <section>
    <p>
      {text} {clicks}
    </p>
  </section>
);

const GrandTotal = ({ results }) => {
  return (
    <section>
      <p>All: {results}</p>
    </section>
  );
};

const Average = ({ results }) => {
  return (
    <section>
      <p>Average: {results}</p>
    </section>
  );
};

const Positive = ({ results }) => {
  return (
    <section>
      <p>Positive: {results}</p>
    </section>
  );
};

// a proper place to define a component
const Statistics = ({
  allClicks,
  good,
  bad,
  neutral,
  sumClick,
  percentage,
  averageCalc,
}) => {
  if (Object.values(allClicks).every(ele => ele === 0)) {
    return <div>No Feedback given</div>;
  }
  return (
    <div>
      <Total clicks={good} text="good" />
      <Total clicks={bad} text="bad" />
      <Total clicks={neutral} text="neutral" />
      <GrandTotal results={sumClick} />
      <Average results={averageCalc} />
      <Positive results={percentage} />
    </div>
  );
};

const App = () => {
  //used an object rather than arrays
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = clicks;

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  };

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };
  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  };

  const sumClicks = () => good + bad + neutral;

  const percentage = (positive) => (positive * 100) / sumClicks() || 0;

  const averageCalc = () => (good - bad) / sumClicks() || 0;

  return (
    <section>
      <Headers text="Give Feedback" />
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />
      <Headers text="Statistics" />
      <Statistics
      allClicks = {clicks}
        good={good}
        bad={bad}
        neutral={neutral}
        sumClick={sumClicks()}
        percentage={percentage(good)}
        averageCalc={averageCalc()}
      />
  
    </section>
  );
};

export default App;