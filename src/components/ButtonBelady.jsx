import { usePageReplacement } from '../context/PageReplacementContext'

const ButtonBelady = () => {
  const { setSequence } = usePageReplacement()

  // Lista de secuencias que presentan la anomalía de Belady
  const beladySequences = [
    '1 2 3 4 1 2 5 1 2 3 4 5', // Ejemplo clásico
    '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0',
    '3 2 1 0 3 2 4 3 2 1 0 4',
    '2 3 2 1 5 2 4 5 3 2 5 1 2 4'
  ]

  const setBeladySequence = () => {
    // Selecciona una secuencia aleatoria de la lista
    const randomIndex = Math.floor(Math.random() * beladySequences.length)
    setSequence(beladySequences[randomIndex])
  }

  // Agregar Tooltip: Descipcion de la anomalía de Belady

  return (
    <button className='self-end' onClick={setBeladySequence}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='38' height='38' viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-tabler icons-tabler-outline icon-tabler-message-2-exclamation mb-2 hover:stroke-aquamarine cursor-pointer transition-colors ease-in-out duration-300'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M8 9h8' />
        <path d='M8 13h6' />
        <path d='M15 18l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5' />
        <path d='M19 16v3' />
        <path d='M19 22v.01' />
      </svg>
    </button>
  )
}

export default ButtonBelady
