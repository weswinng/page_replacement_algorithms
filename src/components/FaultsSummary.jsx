import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus, SecondChance } from '../utils/algorithms'
import { usePageReplacement } from '../context/PageReplacementContext'

const FaultsSummary = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  const { sequence, frames } = usePageReplacement()

  // Verificar si sequence está vacío
  const isSequenceEmpty = !sequence.trim()

  const faultsFifo = !isSequenceEmpty ? FIFO(sequence, frames).pageFaults : null
  const faultsLru = !isSequenceEmpty ? LRU(sequence, frames).pageFaults : null
  const faultsOpt = !isSequenceEmpty ? OPT(sequence, frames).pageFaults : null
  const faultsFifoPlus = !isSequenceEmpty ? FIFOplus(sequence, frames).pageFaults : null
  const faultsSecondChance = !isSequenceEmpty ? SecondChance(sequence, frames).pageFaults : null

  return (
    <>
      <ul className='bg-background-light p-4 rounded-2xl m-10'>
        <li className='text-center text-lg font-bold text-primary pb-4'>Resumen de fallos</li>
        {!isSequenceEmpty && (
          <>
            <li
              onClick={() => setSelectedAlgorithm('optimo')}
              className={`text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'optimo' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary'
              }`}
            >
              OPT: {faultsOpt}
            </li>
            <li
              onClick={() => setSelectedAlgorithm('fifo')}
              className={`text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'fifo' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary'
              }`}
            >
              FIFO: {faultsFifo}
            </li>
            <li
              onClick={() => setSelectedAlgorithm('lru')}
              className={`text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'lru' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary'
              }`}
            >
              LRU: {faultsLru}
            </li>
            <li
              onClick={() => setSelectedAlgorithm('fifo+')}
              className={`text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'fifo+' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary'
              }`}
            >
              FIFO+: {faultsFifoPlus}
            </li>
            <li
              onClick={() => setSelectedAlgorithm('second-chance')}
              className={`text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'second-chance' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary'
              }`}
            >
              Second Chance: {faultsSecondChance}
            </li>
          </>
        )}
      </ul>
    </>
  )
}

FaultsSummary.propTypes = {
  selectedAlgorithm: PropTypes.string.isRequired,
  setSelectedAlgorithm: PropTypes.func.isRequired
}

export default FaultsSummary
