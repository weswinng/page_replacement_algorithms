// import { useState } from 'react'
import InputForm from './components/inputForm'
import { usePageReplacement } from './context/PageReplacementContext'
import {FIFO, LRU, OPT, FIFOplus} from './utils/algorithms'

function App () {
  const { sequence, frames } = usePageReplacement()
  console.log('FIFO:', FIFO(sequence, frames))
  console.log('LRU:', LRU(sequence, frames))
  console.log('OPT:', OPT(sequence, frames))
  console.log('FIFO+:', FIFOplus(sequence, frames))
  return (
    <>
      <h1>Algoritmos de reemplazo de pagina</h1>
      <InputForm />
    </>
  )
}

export default App
