import { usePageReplacement } from '../context/PageReplacementContext'

const InputForm = () => {
  const { sequence, setSequence, frames, setFrames } = usePageReplacement()

  const handleSequenceChange = (e) => setSequence(e.target.value)
  const handleFramesChange = (e) => setFrames(Number(e.target.value))

  return (
    <div>
      <label>
        Secuencia de procesos:
        <input type='text' value={sequence} onChange={handleSequenceChange} />
      </label>
      <label>
        Marcos de memoria:
        <input type='text' value={frames} onChange={handleFramesChange} />
      </label>
    </div>
  )
}

export default InputForm
