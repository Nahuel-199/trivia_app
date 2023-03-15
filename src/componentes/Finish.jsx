import React from 'react'

const Finish = () => {
    const restar = () => {
        window.location.reload()
      }

  return (
    <div>
        <h1 className="text_finish">¡GANASTE!</h1>
        <h3 className="subtitle">Felicitaciones</h3>
        <button className='button_finish' onClick={restar}>Reiniciar</button>
    </div>
  )
}

export default Finish