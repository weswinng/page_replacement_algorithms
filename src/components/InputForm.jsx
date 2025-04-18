import { usePageReplacement } from '../context/PageReplacementContext'

const InputForm = () => {
  const { sequence, setSequence, frames, setFrames } = usePageReplacement()

  const handleSequenceChange = (e) => setSequence(e.target.value)
  const handleFramesChange = (e) => setFrames(Number(e.target.value))

  // Funciones para incrementar y decrementar frames
  const incrementFrames = () => setFrames((prev) => prev + 1)
  const decrementFrames = () => setFrames((prev) => (prev > 1 ? prev - 1 : 1)) // Evita valores menores a 1

  return (
    <div className='text-primary p-4 m-2 rounded-2xl text-shadow text-shadow-primary font-primary min-w-7xl border-1 border-primary shadow-md shadow-primary-shadow'>
      <h1 className='font-primary text-4xl font-black text-center text-primary'>Algoritmos de reemplazo de pagina</h1>
      <div className='flex flex-row mt-4 gap-8 max-w-[1000px] mx-auto text-lg'>
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
        <label className='flex flex-col gap-1 w-52'>
          Frames:
          <div className='flex items-center border-2 border-primary rounded-md'>
            <button
              type='button'
              onClick={decrementFrames}
              className='px-2 py-1 bg-primary text-background font-bold'
            >
              -
            </button>
            <input
              className='w-full text-center focus:outline-none'
              type='number'
              value={frames}
              onChange={handleFramesChange}
              min='1'
            />
            <button
              type='button'
              onClick={incrementFrames}
              className='px-2 py-1 bg-primary text-background font-bold'
            >
              +
            </button>
          </div>
        </label>
      </div>
    </div>
  )
}

export default InputForm
