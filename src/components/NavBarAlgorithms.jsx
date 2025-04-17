import PropTypes from 'prop-types'

const NavBarAlgorithms = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  return (
    <>
      <nav className='flex space-x-4'>
        <button
          onClick={() => setSelectedAlgorithm('optimo')}
          className={`px-4 py-2 rounded-lg ${
            selectedAlgorithm === 'optimo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Optimo
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo')}
          className={`px-4 py-2 rounded-lg ${
            selectedAlgorithm === 'fifo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO
        </button>
        <button
          onClick={() => setSelectedAlgorithm('lru')}
          className={`px-4 py-2 rounded-lg ${
            selectedAlgorithm === 'lru'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          LRU
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo+')}
          className={`px-4 py-2 rounded-lg ${
            selectedAlgorithm === 'fifo+'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO+
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
