import React, { useState } from 'react'

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
      positive: points.good/points.all*100
    })
    }

  const neutralHandler = () => {
    setPoints({
      ...points,
      neutral: points.neutral + 1,
      all: points.all + 1,
      positive: points.good/points.all*100
    })
    }

  const badHandler = () => {
    setPoints({
      ...points,
      bad: points.bad + 1,
      all: points.all + 1,
      average: points.average - 1,
      positive: points.good/points.all*100
    })
    }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <h2>Statistics</h2>
      <div>good {points.good}</div>
      <div>neutral {points.neutral}</div>
      <div>bad {points.bad}</div>
      <div>all {points.all}</div>
      <div>average {points.average}</div>
      <div>positive {points.positive}</div>
    </div>
  )
}

export default App