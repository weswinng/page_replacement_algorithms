import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import '../index.css'

const NavBarAlgorithms = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  return (
    <>
      <nav className='flex space-x-4 font-bold'>
        <button data-tip data-for='optimo-tooltip'
          onClick={() => setSelectedAlgorithm('optimo')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'optimo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Optimo
          <ReactTooltip id='optimo-tooltip' 
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}>
            <span>Optimo: El algoritmo óptimo reemplaza la página que no será usada por más tiempo en el futuro.</span>
          </ReactTooltip>

        </button>
        <button data-tip data-for='fifo-tooltip'
          onClick={() => setSelectedAlgorithm('fifo')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'fifo'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO
          <ReactTooltip id='fifo-tooltip' 
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}>
            <span>Fifo: El algoritmo FIFO reemplaza siempre la página más antigua en memoria, es decir, la primera que llegó.</span>
          </ReactTooltip>
        </button>
        <button data-tip data-for='lru-tooltip'
          onClick={() => setSelectedAlgorithm('lru')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'lru'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          LRU
          <ReactTooltip id='lru-tooltip' 
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}>
            <span>LRU: El algoritmo LRU reemplaza la página que no se ha utilizado en más tiempo.</span>
          </ReactTooltip>

        </button>
        <button data-tip data-for='fifoplus-tooltip'
          onClick={() => setSelectedAlgorithm('fifo+')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'fifo+'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          FIFO+
          <ReactTooltip id='fifoplus-tooltip' 
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}>
            <span>FIFO+: El algoritmo de FIFO+ reemplaza siempre la página más antigua en memoria solo si no tiene una segunda oportunidad, esta segunda oportunidad se asigna a solo un frame recientemente usado.</span>
          </ReactTooltip>

        </button>
        <button data-tip data-for='second-tooltip'
          onClick={() => setSelectedAlgorithm('second-chance')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'second-chance'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Second Chance
          <ReactTooltip id='second-tooltip' 
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}>
            <span>Second Chance: Es una mejora de FIFO que le da a cada página una “segunda oportunidad” antes de ser reemplazada solo si fue usada recientemente.</span>
          </ReactTooltip>

        </button>
        <button data-tip data-for='clock-tooltip'
          onClick={() => setSelectedAlgorithm('clock')}
          className={`px-4 py-2 rounded-lg hover:text-aquamarine cursor-pointer transition-colors ease-in-out duration-300 ${
            selectedAlgorithm === 'clock'
              ? 'bg-background-light text-primary rounded-b-none'
              : 'text-primary'
          }`}
        >
          Clock
          <ReactTooltip id="clock-tooltip"
            className="tooltipA"
            place="top"
            effect="solid"
            multiline={true}
            arrowColor="#F4C095"
            borderColor="#F4C095"
            border={true}
            backgroundColor="#553A4B"
            textColor="#fff"
            delayShow={300}
            delayHide={300}
            >   
            <span>Clock: El algoritmo de CLOCK o Reloj es una optimización del algoritmo FIFO, pero más inteligente porque toma en cuenta si una página fue usada recientemente.</span>
          </ReactTooltip>
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
