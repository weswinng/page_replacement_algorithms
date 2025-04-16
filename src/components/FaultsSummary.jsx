import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus } from '../utils/algorithms'
import { usePageReplacement } from '../context/PageReplacementContext'

const FaultsSummary = ({ selectedAlgorithm }) => {
  const { sequence, frames } = usePageReplacement()

  // Verificar si sequence está vacío
  const isSequenceEmpty = !sequence.trim()

  const faultsFifo = !isSequenceEmpty ? FIFO(sequence, frames).pageFaults : null
  const faultsLru = !isSequenceEmpty ? LRU(sequence, frames).pageFaults : null
  const faultsOpt = !isSequenceEmpty ? OPT(sequence, frames).pageFaults : null
  const faultsFifoPlus = !isSequenceEmpty ? FIFOplus(sequence, frames).pageFaults : null

  return (
    <>
      <ul>
        <li className='text-center text-lg font-bold'>Resumen de fallos</li>
        {!isSequenceEmpty && (
          <>
            <li
              className={`text-center text-lg font-bold px-4 py-2 rounded ${
                selectedAlgorithm === 'optimo' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              OPT: {faultsOpt}
            </li>
            <li
              className={`text-center text-lg font-bold px-4 py-2 rounded ${
                selectedAlgorithm === 'fifo' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              FIFO: {faultsFifo}
            </li>
            <li
              className={`text-center text-lg font-bold px-4 py-2 rounded ${
                selectedAlgorithm === 'lru' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              LRU: {faultsLru}
            </li>
            <li
              className={`text-center text-lg font-bold px-4 py-2 rounded ${
                selectedAlgorithm === 'fifo+' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              FIFO+: {faultsFifoPlus}
            </li>
          </>
        )}
      </ul>
    </>
  )
}

FaultsSummary.propTypes = {
  selectedAlgorithm: PropTypes.string.isRequired
}

export default FaultsSummary
