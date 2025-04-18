import { usePageReplacement } from '../context/PageReplacementContext'

const RandomSequence = () => {
  const { setSequence } = usePageReplacement()

  const generateRandomSequence = () => {
    const length = 16 // Tamaño fijo de 16 caracteres
    let randomSequence = ''
    while (randomSequence.replace(/\s/g, '').length < length) {
      const randomNumber = Math.floor(Math.random() * 10) // Genera un número entre 0 y 9
      randomSequence += `${randomNumber} `
    }
    randomSequence = randomSequence.trim() // Elimina el espacio final
    setSequence(randomSequence)
  }

  return (

    <button className='self-end' onClick={generateRandomSequence}>
      <svg
        className='mb-2 lucide lucide-dices-icon lucide-dices hover:stroke-aquamarine cursor-pointer transition-colors ease-in-out duration-300'
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect width='12' height='12' x='2' y='10' rx='2' ry='2' />
        <path d='m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6' />
        <path d='M6 18h.01' />
        <path d='M10 14h.01' />
        <path d='M15 6h.01' />
        <path d='M18 9h.01' />
      </svg>
    </button>

  )
}

export default RandomSequence
