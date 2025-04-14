// import { useState } from 'react'
import InputForm from './components/inputForm'
import { usePageReplacement } from './context/PageReplacementContext'

function App () {
  const { sequence, frames } = usePageReplacement()
  console.log('secuencia:', sequence)
  console.log('frames:', frames)
  return (
    <>
      <h1>Algoritmos de reemplazo de pagina</h1>
      <InputForm />
    </>
  )
}

export default App
