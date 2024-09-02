interface BoxesProps {
  newWord: string[]
}

export const Boxes = ({newWord}:BoxesProps) => {
  return (
    <div>
        {newWord.map((value, index) => (
          <div className="letter" key={index} tabIndex={0} >
              {value}
          </div>
        ))}
    </div>
  )
}
