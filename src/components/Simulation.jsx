import { useState } from 'react'
import NavBarAlgorithms from './NavBarAlgorithms'
import SimulationTable from './SimulationTable'
import FaultsSummary from './FaultsSummary'

const Simulation = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('optimo')

  return (
    <section>
      <article>
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
