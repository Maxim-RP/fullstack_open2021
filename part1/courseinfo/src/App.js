import React from 'react'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Content = (props) => (
  <div>
    {props.parts.map((item, index)=> <Part key={index} name={item.name} ex={item.exercises} />)}
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.ex}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.parts.reduce((a,b) => a+b.exercises, 0)}</p>
)


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App