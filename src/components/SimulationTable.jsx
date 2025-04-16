import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus } from '../utils/algorithms'
import { usePageReplacement } from '../context/PageReplacementContext'

const SimulationTable = ({ selectedAlgorithm }) => {
  const { sequence, frames } = usePageReplacement()
  const results = () => {
    switch (selectedAlgorithm) {
      case 'optimo':
        return OPT(sequence, frames)
      case 'fifo':
        return FIFO(sequence, frames)
      case 'lru':
        return LRU(sequence, frames)
      case 'fifo+' :
        return FIFOplus(sequence, frames)
      default:
        return OPT(sequence, frames)
    }
  }

  const matriz = results().resultMatrix
  console.log('Matriz: ', matriz)
  // const pageFaults = results().pageFaults
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto border-collapse border border-gray-300 w-full text-center'>
        <thead>
          <tr>
            {sequence.split(' ').map((process, index) => (
              <th key={index} className='border border-gray-300 px-4 py-2 bg-gray-100'>
                {process}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: frames }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {matriz.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className='border border-gray-300 px-4 py-2'
                >
                  {column[rowIndex] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Agregar validaciones de props
SimulationTable.propTypes = {
  selectedAlgorithm: PropTypes.string.isRequired
}

export default SimulationTable
