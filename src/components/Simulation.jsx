import { useState } from 'react'
import NavBarAlgorithms from './NavBarAlgorithms'
import SimulationTable from './SimulationTable'
import FaultsSummary from './FaultsSummary'

const Simulation = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('optimo')

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex flex-row flex-wrap justify-center gap-10 border-primary border-2 w-fit rounded-md p-4 m-4'>
        <article className='bg-background'>
          <NavBarAlgorithms selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
          <SimulationTable selectedAlgorithm={selectedAlgorithm} />
        </article>
        <article>
          <FaultsSummary selectedAlgorithm={selectedAlgorithm} />
        </article>
      </div>
    </section>
  )
}

export default Simulation
