import { usePageReplacement } from '../context/PageReplacementContext'

const InputForm = () => {
  const { sequence, setSequence, frames, setFrames } = usePageReplacement()

  const handleSequenceChange = (e) => setSequence(e.target.value)
  const handleFramesChange = (e) => setFrames(Number(e.target.value))

  return (
    <div className='text-primary p-4 m-2 rounded-md'>
      <h1 className='font-primary text-4xl font-black text-center text-primary'>Algoritmos de reemplazo de pagina</h1>
      <div className='flex flex-row mt-3 gap-4'>
        <label className='flex flex-col gap-1 grow-1'>
          Secuencia de procesos:
          <input className='border-2 border-primary rounded-md p-2' type='text' value={sequence} onChange={handleSequenceChange} placeholder='Ej: 7 0 1 2 0 3 0 4 2 3 0 3 2' />
        </label>
        <label className='flex flex-col gap-1 w-52'>
          Frames:
          <input className='border-2 border-primary rounded-md p-2' type='text' value={frames} onChange={handleFramesChange} />
        </label>
      </div>
    </div>
  )
}

export default InputForm
