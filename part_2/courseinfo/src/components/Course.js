const Course = ({ course }) => {
  return (
    <section>
      <Header text={course.name} key = {course.id} />
      <Content parts={course.parts}/>
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
       
          <Part part={item.name} exercises= {item.exercises} key={item.id}/>
     
      ))}
    </section>
  );
};

const Part = ({ part, exercises}) => {
  return (
    <section>
      <p>{part} {exercises}</p>
    </section>
  );
};
export default Course;
