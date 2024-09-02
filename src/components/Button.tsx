interface ButtonProps {
  handleNewGame: () => void
}

export const Button = ({handleNewGame}: ButtonProps) => {
  return (
    <div>
          <input type="submit" onClick={handleNewGame} className="boton" value={'Nuevo juego'} />
    </div>
  )
}
