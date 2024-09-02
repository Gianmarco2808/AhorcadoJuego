interface LettersIncorrectProps {
     IncorrectLetters: string
}

export const LettersIncorrect = ({IncorrectLetters} : LettersIncorrectProps) => {
     const formattIncorrect = IncorrectLetters.split('').join('-')
     return (
     <>
          <div className='incorrect-letters-container'>
               <p>Letras Incorrectas</p>
               <span>{formattIncorrect}</span>
          </div>
     </>
     )
}
