import PropTypes from 'prop-types'

const NavBarAlgorithms = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  return (
    <>
      <nav className='flex space-x-4 font-bold'>
        <button
          onClick={() => setSelectedAlgorithm('optimo')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'optimo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Optimo
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'fifo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO
        </button>
        <button
          onClick={() => setSelectedAlgorithm('lru')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'lru'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          LRU
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo+')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'fifo+'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO+
        </button>
        <button
          onClick={() => setSelectedAlgorithm('second-chance')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'second-chance'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Second Chance
        </button>
        <button
          onClick={() => setSelectedAlgorithm('clock')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'clock'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Clock
        </button>
      </nav>
    </>
  )
}

NavBarAlgorithms.propTypes = {
  selectedAlgorithm: PropTypes.string.isRequired,
  setSelectedAlgorithm: PropTypes.func.isRequired
}

export default NavBarAlgorithms
