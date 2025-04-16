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

  // Transponer la matriz para que las columnas se conviertan en filas
  const transposedMatrix = matriz[0].map((_, colIndex) =>
    matriz.map((row) => row[colIndex])
  )

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
          {transposedMatrix.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`border border-gray-300 px-4 py-2 ${
                    cell[1] === 1 ? 'bg-green-500 text-white' : ''
                  }`}
                >
                  {cell[0]}
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
