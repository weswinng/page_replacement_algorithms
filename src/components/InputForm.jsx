import { usePageReplacement } from '../context/PageReplacementContext'
import RandomSequence from './RandomSequence'
import ButtonBelady from './ButtonBelady'

const InputForm = () => {
  const { sequence, setSequence, frames, setFrames } = usePageReplacement()

  const handleSequenceChange = (e) => setSequence(e.target.value)
  const handleFramesChange = (e) => {
    const value = Number(e.target.value)
    if (value >= 1 && value <= 10) {
      setFrames(value)
    } else if (value < 1) {
      setFrames(1)
    } else if (value > 10) {
      setFrames(10)
    }
  }

  // Funciones para incrementar y decrementar frames
  const incrementFrames = () => setFrames((prev) => (prev < 10 ? prev + 1 : 10))
  const decrementFrames = () => setFrames((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className='text-primary p-4 m-2 rounded-2xl text-shadow text-shadow-primary font-primary min-w-7xl border-1 border-primary shadow-md shadow-primary-shadow'>
      <h1 className='font-primary text-4xl font-black text-center text-primary'>Algoritmos de Reemplazo de Página</h1>
      <div className='flex flex-row mt-4 gap-8 max-w-[1000px] mx-auto text-lg justify-center'>
        <ButtonBelady />
        <RandomSequence />
        <label className='flex flex-col gap-1 grow-1'>
          Secuencia de páginas:
          <div className='flex flex-row items-center gap-2'>
            <input
              className='border-2 border-primary rounded-md p-2 focus:border-aquamarine focus:outline-none focus:shadow-sm focus:shadow-aquamarine cursor-text flex-grow'
              type='text'
              value={sequence}
              onChange={handleSequenceChange}
              placeholder='Ej: 7 0 1 2 0 3 0 4 2 3 0 3 2'
            />
            <button
              type='button'
              onClick={() => setSequence('')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-backspace hover:stroke-aquamarine cursor-pointer transition-colors ease-in-out duration-300'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z' />
                <path d='M12 10l4 4m0 -4l-4 4' />
              </svg>
            </button>
          </div>
        </label>
        <div className='flex flex-row items-end gap-2'>
          <button
            type='button'
            onClick={decrementFrames}
            className='px-2 py-2 bg-primary text-background font-bold h-12 rounded-md hover:bg-aquamarine cursor-pointer transition-colors ease-in-out duration-300'
          >
            -
          </button>
          <label className='flex flex-col gap-1 h-full w-44'>
            Frames:
            <input
              className='text-center focus:outline-none border-2 border-primary rounded-md grow-1'
              type='number'
              value={frames}
              onChange={handleFramesChange}
              min='1'
            />
          </label>
          <button
            type='button'
            onClick={incrementFrames}
            className='px-2 py-2 bg-primary text-background font-bold h-12 rounded-md hover:bg-aquamarine cursor-pointer transition-colors ease-in-out duration-300'
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputForm
