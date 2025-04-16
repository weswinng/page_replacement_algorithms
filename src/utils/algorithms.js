// Algorititmos de reemplazo de paginas
// Input: secuencia(string) y numero de paginas(int)
// Output: numero de fallos de pagina(int), secuencia de paginas(matriz)

// FIFO
export function FIFO (sequence, numPages) {
  const sequenceArray = sequence.split(' ').map(Number)
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const framesArrayTime = new Array(numPages).fill(0)
  const resultMatrix = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesArrayTime[j] = 0
            break
          }
        }
      } else {
        const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
        framesArray[indexTime] = page
        framesArrayTime[indexTime] = 0
      }
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    resultMatrix.push([...framesArray])
  }
  return {
    pageFaults,
    resultMatrix
  }
}

// LRU
export function LRU (sequence, numPages) {
  const sequenceArray = sequence.split(' ').map(Number)
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const resultMatrix = []
  let framesArrayTime = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    framesArrayTime = []
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            break
          }
        }
      } else {
        for (let j = i - 1; j >= 1; j--) {
          if (framesArrayTime.length < framesArray.length - 1) {
            if (!framesArrayTime.includes(sequenceArray[j])) {
              framesArrayTime.push(sequenceArray[j])
            }
          }
        }
        let indexTime
        for (let j = 0; j < framesArray.length; j++) {
          if (!framesArrayTime.includes(framesArray[j])) {
            indexTime = framesArray.indexOf(framesArray[j])
            framesArray[indexTime] = page
            break
          }
        }
      }
    }
    // console.log("Frames: ", framesArray, "Time: ", framesArrayTime)
    resultMatrix.push([...framesArray])
  }
  return {
    pageFaults,
    resultMatrix
  }
}

// OPT
export function OPT (sequence, numPages) {
  const sequenceArray = sequence.split(' ').map(Number)
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const resultMatrix = []
  let futurePages = []
  const framesArrayTime = new Array(numPages).fill(0)

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    futurePages = []
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            break
          }
        }
      } else {
        for (let j = i + 1; j < sequenceArray.length; j++) {
          if (futurePages.length < framesArray.length - 1) {
            if (!futurePages.includes(sequenceArray[j]) && (framesArray.includes(sequenceArray[j]))) {
              futurePages.push(sequenceArray[j])
            }
          }
        }
        if (futurePages.length === 0 || futurePages.length !== framesArray.length - 1) {
          const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
        } else {
          let indexTime
          for (let j = 0; j < framesArray.length; j++) {
            if (!futurePages.includes(framesArray[j])) {
              indexTime = framesArray.indexOf(framesArray[j])
              framesArray[indexTime] = page
              framesArrayTime[indexTime] = 0
              break
            }
          }
        }
      }
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    // console.log('Frames: ', framesArray, 'Future: ', futurePages, 'Time: ', framesArrayTime)
    resultMatrix.push([...framesArray])
  }
  return {
    pageFaults,
    resultMatrix
  }
}

// FIFO+
export function FIFOplus (sequence, numPages) {
  const sequenceArray = sequence.split(' ').map(Number)
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const framesArrayTime = new Array(numPages).fill(0)
  const secondChance = new Array(numPages).fill(false)
  const resultMatrix = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesArrayTime[j] = 0
            break
          }
        }
      } else {
        let exit
        let indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
        for (let j = 0; j < framesArray.length; j++) {
          if (secondChance[indexTime] === false) {
            framesArray[indexTime] = page
            framesArrayTime[indexTime] = 0
            secondChance[indexTime] = false
            exit = true
            break
          } else {
            secondChance[indexTime] = false
            const framesArrayTimeCopy = [...framesArrayTime]
            indexTime = framesArrayTime.indexOf(framesArrayTimeCopy.sort((a, b) => a - b)[1])
            framesArray[indexTime] = page
            framesArrayTime[indexTime] = 0
            secondChance[indexTime] = false
            exit = true
          }
        }
        if (exit === undefined) {
          const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
        }
      }
    } else {
      const indexTime = framesArray.indexOf(page)
      secondChance.fill(false)
      secondChance[indexTime] = true
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    // console.log("Frames: ", framesArray, "Time: ", framesArrayTime, "Second: ", secondChance)
    resultMatrix.push([...framesArray])
  }
  return {
    pageFaults,
    resultMatrix
  }
}

// console.log("FIFO: ", FIFO("1 2 3 4 1 2 5 1 2 3 4 5", 3));
// console.log("FIFO: ", FIFO("1 2 3 4 1 2 5 1 2 3 4 5", 4));
// console.log("LRU: ", LRU("1 2 3 4 1 2 5 1 2 3 4 5", 3));
// console.log("LRU: ", LRU("1 2 3 4 1 2 5 1 2 3 4 5", 4));
// console.log("OPT: ", OPT("7 0 1 0 0 2 0 3 0 4 2 3", 3));
// console.log("OPT: ", OPT("1 2 3 4 1 2 5 1 2 3 4 5", 4));
// console.log("FIFO+: ", FIFOplus("7 0 1 0 0 2 0 3 0 4 2 3", 3));
// console.log("FIFO+: ", FIFOplus("1 2 3 4 1 2 5 1 2 3 4 5", 4 ));
