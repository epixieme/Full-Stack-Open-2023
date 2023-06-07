const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    // console.log(props.course.name)
    return (
      <header>
        <h1>{props.course.name}</h1>
      </header>
    );
  };

  const Part = (props) => {
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
    const parts =
      props.parts[0].exercises +
      props.parts[1].exercises +
      props.parts[2].exercises;

    return (
      <section>
        <p>Number of exercises {parts} </p>
      </section>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
