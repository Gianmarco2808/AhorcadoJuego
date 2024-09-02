const words = ['mundo','camino','sabado','tarde','flecha','hola','maria','arbol','laptop','telefono','puerta','marco','viernes','martillo','mesa','muleta','huerta','queso','suerte','juego','lunes']

export const SelectedWord = () : String => {
     const isSelected = Math.floor(Math.random() * words.length)
     return words[isSelected]
}