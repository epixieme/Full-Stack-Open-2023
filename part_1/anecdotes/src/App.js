import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Header =({text})=><section><h1>{text}</h1></section>

const HighestVotes=({anecdotes,votes})=>{

  const max = votes.indexOf(Math.max(...votes))
   return(
    <div>
      <p>{anecdotes[max]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
   )
 
}
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

 
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };


  return (
    <div>
    <Header text="Anecdote of the Day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={handleClick} text="Next Anecdote" />
      <Header text="Anecdote with most votes" />
      <HighestVotes anecdotes={anecdotes} votes = {votes}/> 
    </div>
  );
};

export default App;
