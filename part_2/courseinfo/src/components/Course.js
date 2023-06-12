const Part = ({ part, exercises }) => (
  <section>
    <p>
      {part} {exercises}
    </p>
  </section>
);

const Stats = ({ sum }) => {
  const total = sum.reduce((a, c) => a + c.exercises, 0);
  return (
    <section>
      <h4>Total of {total} exercises</h4>
    </section>
  );
};

const Content = ({ parts }) =>
  parts.map((item) => (
    <Part part={item.name} exercises={item.exercises} key={item.id} />
  ));

const Header = ({ text }) => (
  <section>
    <h1>{text}</h1>{" "}
  </section>
);

const Course = ({ course }) => {
  console.log(course);
  return (
    <section>
      <Header text={course.name} key={course.id} />
      <Content parts={course.parts} />
      <Stats sum={course.parts} />
    </section>
  );
};

export default Course;
