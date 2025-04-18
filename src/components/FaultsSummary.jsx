import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus, SecondChance, Clock } from '../utils/algorithms'
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
  const faultsClock = !isSequenceEmpty ? Clock(sequence, frames).pageFaults : null

  return (
    <>
      <ul className='bg-background-light p-4 rounded-2xl mt-10 min-w-[240px]'>
        <li className='text-center text-lg font-bold text-primary pb-4 '>Resumen de fallos</li>
        {!isSequenceEmpty && (
          <>
            <li
              onClick={() => setSelectedAlgorithm('optimo')}
              className={`flex flex-row justify-between text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'optimo' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>OPT:</span>
              <span>{faultsOpt}</span>
            </li>
            <li
              onClick={() => setSelectedAlgorithm('fifo')}
              className={`flex flex-row justify-between text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'fifo' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>FIFO:</span>
              <span>{faultsFifo}</span>
            </li>
            <li
              onClick={() => setSelectedAlgorithm('lru')}
              className={`flex flex-row justify-between text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'lru' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>LRU:</span>
              <span>{faultsLru}</span>
            </li>
            <li
              onClick={() => setSelectedAlgorithm('fifo+')}
              className={`flex flex-row justify-between text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'fifo+' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>FIFO+:</span>
              <span>{faultsFifoPlus}</span>
            </li>
            <li
              onClick={() => setSelectedAlgorithm('second-chance')}
              className={`flex flex-row justify-between text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'second-chance' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>Second Chance:</span>
              <span>{faultsSecondChance}</span>
            </li>
            <li
              onClick={() => setSelectedAlgorithm('clock')}
              className={`flex flex-row justify-between text-center text-lg font-bold px-4 py-2 ${
                selectedAlgorithm === 'clock' ? 'bg-aquamarine text-background-light rounded-full shadow-xs shadow-aquamarine' : 'text-primary hover:text-aquamarine cursor-pointer transition-all ease-in-out duration-200'
              }`}
            >
              <span>Clock:</span>
              <span>{faultsClock}</span>
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
