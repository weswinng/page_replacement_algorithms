import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus } from '../utils/algorithms'
import { usePageReplacement } from '../context/PageReplacementContext'

const SimulationTable = ({ selectedAlgorithm }) => {
  const { sequence, frames } = usePageReplacement()

  if (!sequence.trim()) {
    return (
      <div className='text-center text-lg font-bold text-gray-500'>
        No hay resultados disponibles
      </div>
    )
  }

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
    <div className='overflow-x-auto bg-background-light p-4 rounded-b-md rounded-r-md'>
      <table className='table-auto'>
        <thead>
          <tr>
            {sequence.split(' ').map((process, index) => (
              <th key={index} className='text-primary'>
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
                  className={`border border-gray-300 px-4 py-2 min-w-14 text-center ${
                    cell[1] === 1 ? 'bg-aquamarine text-background' : 'text-primary'
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
