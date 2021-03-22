import React, { useState } from 'react'

const Statistic = ({ points, name }) => {
  return (
    <tr>
      <th>{name}</th><th>{points[name]} {name === 'positive' ? '%' : ''}</th>
    </tr>
  )
}

const Statistics = ({ points }) => {
  if (points.all !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <Statistic points={points} name='good' />
          <Statistic points={points} name='neutral' />
          <Statistic points={points} name='bad' />
          <Statistic points={points} name='all' />
          <Statistic points={points} name='average' />
          <Statistic points={points} name='positive' />
        </table>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <div>No feedback given</div>
    </div>
  )
}

const StatButton = ({ handleClick, type }) => {

  return (
    <button onClick={handleClick}>{type}</button>
  )
}

const App = () => {

  const [points, setPoints] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: null
  })

  const goodHandler = () => {
    setPoints({
      ...points,
      good: points.good + 1,
      all: points.all + 1,
      average: points.average + 1,
      positive: Math.round((points.good + 1) / (points.all + 1) * 100)
    })
  }

  const neutralHandler = () => {
    setPoints({
      ...points,
      neutral: points.neutral + 1,
      all: points.all + 1,
      positive: Math.round(points.good / (points.all + 1) * 100)
    })
  }

  const badHandler = () => {
    setPoints({
      ...points,
      bad: points.bad + 1,
      all: points.all + 1,
      average: points.average - 1,
      positive: Math.round(points.good / (points.all + 1) * 100)
    })
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <StatButton handleClick={() => goodHandler()} type='good' />
      <StatButton handleClick={() => neutralHandler()} type='neutral' />
      <StatButton handleClick={() => badHandler()} type='bad' />
      <Statistics points={points} />
    </div>
  )
}

export default App