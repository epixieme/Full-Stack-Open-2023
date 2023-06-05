const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return (
      <header>
        <h1>{props.course}</h1>
      </header>
    );
  };

  const Part = (props) => {
    console.log(props.parts.name)
    return (
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <section>
        <Part parts={props.parts[0]} />
        <Part parts={props.parts[1]} />
        <Part parts={props.parts[2]} />
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
      {/* <Header course={course} />
      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
       <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
