import { useState } from 'react'
import NavBarAlgorithms from './NavBarAlgorithms'
import SimulationTable from './SimulationTable'
import FaultsSummary from './FaultsSummary'

const Simulation = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('optimo')

  return (
    <section className='flex flex-row justify-center items-center gap-14'>
      <article className='bg-background'>
        <NavBarAlgorithms selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
        <SimulationTable selectedAlgorithm={selectedAlgorithm} />
      </article>
      <article>
        <FaultsSummary selectedAlgorithm={selectedAlgorithm} />
      </article>
    </section>
  )
}

export default Simulation
