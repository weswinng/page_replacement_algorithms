import PropTypes from 'prop-types'

const NavBarAlgorithms = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  return (
    <>
      <nav className='flex space-x-4 mb-4'>
        <button
          onClick={() => setSelectedAlgorithm('optimo')}
          className={`px-4 py-2 rounded ${
            selectedAlgorithm === 'optimo'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Optimo
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo')}
          className={`px-4 py-2 rounded ${
            selectedAlgorithm === 'fifo'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          FIFO
        </button>
        <button
          onClick={() => setSelectedAlgorithm('lru')}
          className={`px-4 py-2 rounded ${
            selectedAlgorithm === 'lru'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          LRU
        </button>
        <button
          onClick={() => setSelectedAlgorithm('fifo+')}
          className={`px-4 py-2 rounded ${
            selectedAlgorithm === 'fifo+'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
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
