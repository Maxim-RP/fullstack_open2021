import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(null) // good/all*100

  const goodHandler = () => {
    setGood(good+1); 
    setAll(all+1); 
    setAverage(average+1); 
    setPositive(good/all*100)}
    
  const neutralHandler = () => {
    setNeutral(neutral+1); 
    setAll(all+1); 
    setPositive(good/all*100)}

  const badHandler = () => {
    setBad(bad+1); 
    setAll(all+1); 
    setAverage(average-1); 
    setPositive(good/all*100)}

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <h2>Statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </div>
  )
}

export default App