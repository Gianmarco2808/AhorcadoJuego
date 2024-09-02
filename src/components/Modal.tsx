interface ModalProps {
     isOpen: boolean
     message: string
     onNewGame: () => void
}

export const Modal = ({ isOpen, message, onNewGame }: ModalProps) => {
     if (!isOpen) return null
     return (
          <div className="modal-overlay">
               <div className="modal-content" onClick={e => e.stopPropagation()}>
               <div className="modal-body">
                    {message}
               </div>
               <button className="modal-new-game" onClick={onNewGame}>Iniciar Nuevo Juego</button>
               </div>
          </div>
     )
}
