import React from 'react'

const Test = () => {
  var saludo = 'hola'// debería marcar 'var' como incorrecto
  console.log(saludo)
  return (
    <div>
      <h1>Hola</h1>; {/* el punto y coma debería marcarlo como innecesario */}
    </div>
  )
}

export default Test
