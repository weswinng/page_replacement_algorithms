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
              {row.map((cell, cellIndex) => {
                return (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className={`border border-gray-300 px-4 py-2 min-w-14 text-center ${
                      cell[1] === 1 ? 'bg-aquamarine text-background' : 'text-primary'
                    }`}
                  >
                    {String(cell[0]).includes('*') ? cell[0][0] : cell[0]}
                    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='currentColor' className='icon icon-tabler icons-tabler-filled icon-tabler-heart'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' /></svg>
                  </td>
                );
              })}
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
