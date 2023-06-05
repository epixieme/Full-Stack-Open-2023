const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return (
      <header>
        <h1>{props.courseName}</h1>
      </header>
    );
  };

  const Part = (props) => {
    <section>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </section>;
  };

  const Content = (props) => {
    return (
      <section>
        <Part part1={props.part1} exercises1={props.exercises1} />
        <Part part2={props.part2} exercises2={props.exercises2} />
        <Part part3={props.part3} exercises3={props.exercises3} />
      </section>
    );
  };
  const Total = (props) => {
    return (
      <section>
        <p>Number of exercises {props.total}</p>
      </section>
    );
  };

  return (
    <div>
      <Header courseName={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <section></section>

      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
