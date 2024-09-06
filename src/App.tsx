import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Boxes } from './components/Boxes'
import { Button } from './components/Button'
import { Figure } from './components/Figure'
import { SelectedWord } from './utils/SelectWord'
import { Letters } from './utils/Letters'
import { LettersIncorrect } from './components/IncorrectLetters'
import { arrayEquals } from './utils/ArrayEq'
import { Modal } from './components/Modal'
import { NameLetters } from './components/Letters'

function App() {

  const [word, setWord] = useState(SelectedWord())
  const [letter, setLetter] = useState('')
  const [newWord, setNewWord] = useState(Array(word.length).fill('_'))
  const [attempts, setAttempts] = useState(0)
  const [IncorrectLetters, setIncorrectLetters] = useState('')
  const [lose, setLose ] = useState( false )
  const [won, setWon] = useState( false )
  const [isModalOpen, setIsModalOpen] = useState(false)

  const wordArray = useMemo(() => word.toUpperCase().split(''), [word])

  //determinar si se perdio
  useEffect( () => {
    if( attempts >= 6 ){
      setLose( true )
      setIsModalOpen(true)
    }
  }, [ attempts]) 

  //determinar si gano
  useEffect( ()=> {
    const currentHiddenWord = arrayEquals(wordArray, newWord)
    if (currentHiddenWord) {
      setWon(true)
      setIsModalOpen(true)
    }
  }, [newWord, wordArray] )

  const handleKeyDown = (e: KeyboardEvent) => {
    if (Letters.includes(e.key.toUpperCase())) {
      setLetter(e.key.toUpperCase())
    }
  }

  // Maneja los clics en los botones de letras
  const handleLetterClick = (clickedLetter : string) => {
    if (Letters.includes(clickedLetter)) {
      setLetter(clickedLetter);
    }
  };

  //evento del teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  //Logica
  useEffect(() => {
    if(lose) return
    if(won) return

    if (letter) {
      let isLetterInWord = false
      const updatedWord = newWord.map((char, index) => {
        if (wordArray[index] === letter) {
          isLetterInWord = true
          return letter
        } else {
          return char
        }
      })
      if (!isLetterInWord) {
        setIncorrectLetters(prev => prev + letter)
        setAttempts(prev => prev + 1)
      }
      setNewWord(updatedWord)
      setLetter('')
    }
  }, [letter, newWord, word, wordArray, attempts])

  //Funcion para inicializar el juego
  const handleNewGame = () => {
    const newWordGame = SelectedWord()
    setWord(newWordGame)
    setNewWord(Array(newWordGame.length).fill('_'))
    setAttempts(0)
    setIncorrectLetters('')
    setLetter('')
    setLose(false)
    setWon(false)
    setIsModalOpen(false)
  }

  return (
    <>
        <div className="apple">
          <div className="attempts-container">
            Intentos
            <span>{attempts} / 6</span>
          </div>
          <div className="principal">
            <div className="game-container">
              <Figure attempts={attempts} />
              <Boxes newWord={newWord} />
              <NameLetters onClick={handleLetterClick} />
            </div>
            <Button handleNewGame={handleNewGame} />
          </div>
          <LettersIncorrect IncorrectLetters={IncorrectLetters} />
        </div>
        <Modal
          isOpen={isModalOpen}
          message={lose ? `Upps Perdiste!! 👎 La palabra era: ${word}` : won ? 'Felicidades, ganaste 👏!!' : ''}
          onNewGame={handleNewGame}
        />
    </>
  );
}

export default App
