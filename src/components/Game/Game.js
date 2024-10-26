import React from 'react'

import {sample} from '../../utils'
import {WORDS} from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({answer})

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess === answer) {
      setGameStatus('win')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      {gameStatus}

      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {/* {gameStatus === 'win' && <div className="banner">WIN</div>}
      {gameStatus === 'lost' && <div className="banner">LOST</div>} */}
    </>
  )
}

export default Game
