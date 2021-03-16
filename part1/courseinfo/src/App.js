import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part name={props.part1} ex={props.exercises1} />
    <Part name={props.part2} ex={props.exercises2} />
    <Part name={props.part3} ex={props.exercises3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App