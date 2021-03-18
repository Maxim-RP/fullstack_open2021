import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part name={props.part1.name} ex={props.part1.exercises} />
    <Part name={props.part2.name} ex={props.part2.exercises} />
    <Part name={props.part3.name} ex={props.part3.exercises} />
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.ex}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
)


const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}

export default App