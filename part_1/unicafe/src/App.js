import { useState } from "react";

const App = () => {
  
  const Headers = ({ text }) => <h1>{text}</h1>;

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const handleGoodClick = () => {
    console.log("clicked");

    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  };

  const handleBadClick = () => {
    console.log("clicked");

    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };
  const handleNeutralClick = () => {
    console.log("clicked");

    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  };

  const Total = ({ clicks, text }) => (
    <section>
      <p>
        {text} {clicks}
      </p>
    </section>
  );

  return (
    <section>
      <Headers text='Give Feedback'/>
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />
      <Headers text='Statistics'/>
      <Total clicks={clicks.good} text="good" />
      <Total clicks={clicks.bad} text="bad" />
      <Total clicks={clicks.neutral} text="neutral" />
    </section>
  );
};

export default App;
