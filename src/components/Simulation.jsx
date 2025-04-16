import { useState } from 'react'
import NavBarAlgorithms from './NavBarAlgorithms'
import SimulationTable from './SimulationTable'

const Simulation = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('optimo')

  return (
    <>
      <NavBarAlgorithms selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
      <SimulationTable selectedAlgorithm={selectedAlgorithm} />
    </>
  )
}

export default Simulation
