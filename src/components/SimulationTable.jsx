import PropTypes from 'prop-types'
import { FIFO, LRU, OPT, FIFOplus, SecondChance } from '../utils/algorithms'
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
      case 'second-chance':
        return SecondChance(sequence, frames) // Cambia esto por la función de Second Chance cuando esté disponible
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
    <div className='overflow-x-auto bg-background-light p-4 rounded-b-md rounded-r-md max-w-[930px]'>
      <div className='w-full overflow-x-scroll'>
        <table className='table-fixed w-full'>
          <thead>
            <tr>
              {sequence
                .split(' ')
                .filter((item) => !isNaN(item) && item.trim() !== '')
                .map((process, index) => (
                  <th
                    key={index}
                    className='text-primary w-16 text-center transition-colors ease-in-out delay-1000 duration-1000'
                  >
                    {process}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {transposedMatrix.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => {
                  const hasAsterisk = String(cell[0]).includes('*') // Guarda la condición en una variable para claridad
                  return (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      className={`border border-gray-300 p-2 w-16 h-16 text-center font-black text-lg justify-items-center transition-all ease-in-out duration-500 delay-75 ${
                        cell[1] === 1 ? 'bg-aquamarine text-background' : 'text-primary'
                      }`}
                    >
                      <div>{hasAsterisk ? cell[0][0] : cell[0]}</div>
                      {hasAsterisk && (
                        <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 24 24' fill='currentColor' className='icon icon-tabler icons-tabler-filled icon-tabler-heart block align-middle'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' /></svg>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Agregar validaciones de props
SimulationTable.propTypes = {
  selectedAlgorithm: PropTypes.string.isRequired
}

export default SimulationTable
