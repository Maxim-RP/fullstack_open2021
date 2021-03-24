import React from 'react'


const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => 
    (
        <div>
            {parts.map((part) => <Part key={part.id} name={part.name} ex={part.exercises} />)}
        </div>
    )

const Part = ({ name, ex }) => <p>{name} {ex}</p>

const Total = ({ parts }) => <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>

const Course = ({ course }) =>
    (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )


export default Course