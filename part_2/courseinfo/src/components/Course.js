const Course = ({ course }) => {
  return (
    <section>
      <Header text={course.name} key={course.id} />
      <Content parts={course.parts} />
      <Stats sum={course.parts} />
    </section>
  );
};

const Header = ({ text }) => {
  return (
    <section>
      <h1>{text}</h1>
    </section>
  );
};

const Content = ({ parts }) => {
  return (
    <section>
      {parts.map((item) => (
        <Part part={item.name} exercises={item.exercises} key={item.id} />
      ))}
    
    </section>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <section>
      <p>
        {part} {exercises}
      </p>
    </section>
  );
};

const Stats = ({ sum }) => {
   const total = sum.map((item) => item.exercises)
  .reduce((a, c) => a + c, 0);

  return (
    <section>
      <h4>Total of {total} exercises</h4>
    </section>
  );
};

export default Course;
