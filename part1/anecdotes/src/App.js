import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  const nextHandler = () => setSelected(getRandom(0,5))
  const voteHandler = () => {
    const copyPoints = [...points]
    copyPoints[selected] = copyPoints[selected] + 1
    setPoints(copyPoints)
    }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={nextHandler}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[points.indexOf(Math.max(...points))]}</div>
      <div>has {Math.max(...points)} votes</div>
    </div>
  )
}

export default App