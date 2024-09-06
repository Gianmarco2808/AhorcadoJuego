import { Letters } from "../utils/Letters"

interface NameLettersProps {
     onClick : (clickedLetter: string) => void
}

export const NameLetters = ({onClick}: NameLettersProps) => {
  return (
     <div className="name-letters">
          {Letters.map((letter, index) => (
               <button
                    key={index}
                    onClick={() => onClick(letter)}
                    className="letter-button"
               >
                    {letter}
               </button>
          ))}
     </div>
  )
}
