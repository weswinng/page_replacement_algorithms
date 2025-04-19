import { useState } from 'react'
import NavBarAlgorithms from './NavBarAlgorithms'
import SimulationTable from './SimulationTable'
import FaultsSummary from './FaultsSummary'
import { usePageReplacement } from '../context/PageReplacementContext'

const Simulation = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('optimo')
  const { sequence } = usePageReplacement()

  if (!sequence.trim()) {
    return (
      <section className='flex flex-col justify-center items-center font-primary mt-4'>
        <div
          className='flex justify-center items-center text-center align-center text-primary text-2xl font-extrabold border-primary border-2 w-[1230px] h-48 rounded-2xl p-4 m-4 shadow-2xl shadow-primary-shadow bg-background'
        >
          No hay resultados disponibles
        </div>
      </section>
    )
  }

  return (
    <section className='flex flex-col justify-center items-center font-primary mt-4'>
      <div
        className='flex flex-row flex-wrap justify-center gap-6 border-primary border-2 w-fit rounded-2xl p-4 m-4 shadow-2xl shadow-primary-shadow bg-background'
      >
        <article className='bg-background'>
          <NavBarAlgorithms selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
          <SimulationTable selectedAlgorithm={selectedAlgorithm} />
        </article>
        <article>
          <FaultsSummary selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
        </article>
      </div>
    </section>
  )
}

export default Simulation
