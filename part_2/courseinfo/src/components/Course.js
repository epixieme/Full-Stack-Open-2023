const Course = ({ course }) => {
  return (
    <section>
      <Header text={course.name} key={course.id} />
      <Content parts={course.parts} />
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
const sum = parts.map(item=>item.exercises).reduce((a,c)=>a+c,0)
  return (
    <section>
      {parts.map((item) => (
        <Part part={item.name} exercises={item.exercises} key={item.id} />
      ))}
      <Stats sum={sum} />
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

const Stats = ({sum}) =>{

    return (
        <section>
          <h4>
            Total of {sum} exercises
          </h4>
        </section>
      );

}

export default Course;
