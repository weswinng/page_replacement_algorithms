import { usePageReplacement } from '../context/PageReplacementContext'
import RandomSequence from './RandomSequence'

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
      <h1 className='font-primary text-4xl font-black text-center text-primary'>Algoritmos de reemplazo de pagina</h1>
      <div className='flex flex-row mt-4 gap-8 max-w-[1000px] mx-auto text-lg justify-center'>
        <RandomSequence />
        <label className='flex flex-col gap-1 grow-1'>
          Secuencia de procesos:
          <input
            className='border-2 border-primary rounded-md p-2 focus:border-aquamarine focus:outline-none focus:shadow-sm focus:shadow-aquamarine cursor-text'
            type='text'
            value={sequence}
            onChange={handleSequenceChange}
            placeholder='Ej: 7 0 1 2 0 3 0 4 2 3 0 3 2'
          />
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
