// Algorititmos de reemplazo de paginas
// Input: secuencia(string) y numero de paginas(int)
// Output: numero de fallos de pagina(int), secuencia de paginas(matriz)

// FIFO

function MatrixCombine (matrix1, matrix2, length1, length2) {
  const resultmatrix = []
  for (let i = 0; i < length1; i++) {
    // Inicializar cada fila como un array vacío
    resultmatrix[i] = []
    for (let j = 0; j < length2; j++) {
      // Combinar los valores de ambas matrices en la posición [i][j]
      resultmatrix[i][j] = [matrix1[i][j], matrix2[i][j]]
    }
  }
  return resultmatrix
}

export function FIFO (sequence, numPages) {
  const sequenceArray = sequence
    .split(' ')
    .filter((item) => !isNaN(item) && item.trim() !== '') // Filtra solo números válidos
    .map(Number) // Convierte los elementos a números
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const framesChanges = new Array(numPages).fill(0)
  const framesArrayTime = new Array(numPages).fill(0)
  const resultFramesMatrix = []
  const resultMatrixChanges = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    framesChanges.fill('0')
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesChanges[j] = 1
            framesArrayTime[j] = 0
            break
          }
        }
      } else {
        const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
        framesArray[indexTime] = page
        framesChanges[indexTime] = 1
        framesArrayTime[indexTime] = 0
      }
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    // console.log('Frames: ', framesArray, 'Time: ', framesArrayTime)
    resultFramesMatrix.push([...framesArray])
    resultMatrixChanges.push([...framesChanges])
  }

  const resultMatrix = MatrixCombine(resultFramesMatrix, resultMatrixChanges, sequenceArray.length, numPages)

  return {
    pageFaults,
    resultMatrix
  }
}

// LRU
export function LRU (sequence, numPages) {
  const sequenceArray = sequence
    .split(' ')
    .filter((item) => !isNaN(item) && item.trim() !== '') // Filtra solo números válidos
    .map(Number) // Convierte los elementos a números
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  let framesArrayTime = []
  const framesChanges = new Array(numPages).fill(0)
  const resultFramesMatrix = []
  const resultMatrixChanges = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    framesChanges.fill('0')
    framesArrayTime = []
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesChanges[j] = 1
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
            framesChanges[indexTime] = 1
            break
          }
        }
      }
    }
    // console.log("Frames: ", framesArray, "Time: ", framesArrayTime)
    resultFramesMatrix.push([...framesArray])
    resultMatrixChanges.push([...framesChanges])
  }

  const resultMatrix = MatrixCombine(resultFramesMatrix, resultMatrixChanges, sequenceArray.length, numPages)

  return {
    pageFaults,
    resultMatrix
  }
}

// OPT
export function OPT (sequence, numPages) {
  const sequenceArray = sequence
    .split(' ')
    .filter((item) => !isNaN(item) && item.trim() !== '') // Filtra solo números válidos
    .map(Number) // Convierte los elementos a números
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  let futurePages = []
  const framesArrayTime = new Array(numPages).fill(0)
  const framesChanges = new Array(numPages).fill(0)
  const resultFramesMatrix = []
  const resultMatrixChanges = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    futurePages = []
    framesChanges.fill('0')
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesChanges[j] = 1
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
        if (futurePages.length === 0) {
          const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          framesChanges[indexTime] = 1
        } else {
          let indexTime
          for (let j = 0; j < framesArray.length; j++) {
            const framesArrayTimeCopy = [...framesArrayTime]
            indexTime = framesArrayTime.indexOf(framesArrayTimeCopy.sort((a, b) => b - a)[j])
            if (!futurePages.includes(framesArray[j])) {
              indexTime = framesArray.indexOf(framesArray[j])
              framesArray[indexTime] = page
              framesArrayTime[indexTime] = 0
              framesChanges[indexTime] = 1
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
    resultFramesMatrix.push([...framesArray])
    resultMatrixChanges.push([...framesChanges])
  }

  const resultMatrix = MatrixCombine(resultFramesMatrix, resultMatrixChanges, sequenceArray.length, numPages)

  return {
    pageFaults,
    resultMatrix
  }
}

// FIFO+
export function FIFOplus (sequence, numPages) {
  const sequenceArray = sequence
    .split(' ')
    .filter((item) => !isNaN(item) && item.trim() !== '') // Filtra solo números válidos
    .map(Number) // Convierte los elementos a números
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const framesArrayTime = new Array(numPages).fill(0)
  const secondChance = new Array(numPages).fill('')
  const framesChanges = new Array(numPages).fill(0)
  const resultFramesMatrix = []
  const resultMatrixChanges = []
  const resultMatrixSecondChance = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    framesChanges.fill('0')
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesArrayTime[j] = 0
            framesChanges[j] = 1
            break
          }
        }
      } else {
        let exit
        let indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
        if (secondChance[indexTime] === '') {
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          framesChanges[indexTime] = 1
          exit = true
        } else {
          secondChance[indexTime] = ''
          const framesArrayTimeCopy = [...framesArrayTime]
          indexTime = framesArrayTime.indexOf(framesArrayTimeCopy.sort((a, b) => b - a)[1])
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          secondChance[indexTime] = ''
          framesChanges[indexTime] = 1
          exit = true
        }
        if (exit === undefined) {
          const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          framesChanges[indexTime] = 1
        }
      }
    } else {
      const indexTime = framesArray.indexOf(page)
      secondChance.fill('')
      secondChance[indexTime] = '*'
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    // console.log("Frames: ", framesArray, "Second: ", secondChance, "Time: ", framesArrayTime)
    resultFramesMatrix.push([...framesArray])
    resultMatrixChanges.push([...framesChanges])
    resultMatrixSecondChance.push([...secondChance])
  }

  const preMatrix = MatrixCombine(resultFramesMatrix, resultMatrixSecondChance, sequenceArray.length, numPages)
  const resultMatrix = MatrixCombine(preMatrix, resultMatrixChanges, sequenceArray.length, numPages)

  return {
    pageFaults,
    resultMatrix
  }
}

// Second Chance
export function SecondChance (sequence, numPages) {
  const sequenceArray = sequence.split(' ').map(Number)
  let pageFaults = 0
  const framesArray = new Array(numPages).fill('-')
  const framesArrayTime = new Array(numPages).fill(0)
  const secondChance = new Array(numPages).fill('')
  const framesChanges = new Array(numPages).fill(0)
  const resultFramesMatrix = []
  const resultMatrixChanges = []
  const resultMatrixSecondChance = []

  for (let i = 0; i < sequenceArray.length; i++) {
    const page = sequenceArray[i]
    framesChanges.fill('0')
    if (!framesArray.includes(page)) {
      pageFaults++
      if (framesArray.includes('-')) {
        for (let j = 0; j < framesArray.length; j++) {
          if (framesArray[j] === '-') {
            framesArray[j] = page
            framesArrayTime[j] = 0
            framesChanges[j] = 1
            break
          }
        }
      } else {
        let exit
        let indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
        if (secondChance[indexTime] === '') {
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          secondChance[indexTime] = ''
          framesChanges[indexTime] = 1
          exit = true
        } else {
          for (let j = 1; j < framesArray.length; j++) {
            const framesArrayTimeCopy = [...framesArrayTime]
            indexTime = framesArrayTime.indexOf(framesArrayTimeCopy.sort((a, b) => b - a)[j])
            if (secondChance[indexTime] === '') {
              framesArray[indexTime] = page
              framesArrayTime[indexTime] = 0
              secondChance[indexTime] = ''
              framesChanges[indexTime] = 1
              exit = true
              break
            }
          }
        }
        if (exit === undefined) {
          const indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime))
          framesArray[indexTime] = page
          framesArrayTime[indexTime] = 0
          framesChanges[indexTime] = 1
        }
      }
    } else {
      const indexTime = framesArray.indexOf(page)
      secondChance.fill('')
      secondChance[indexTime] = '*'
    }
    for (let j = 0; j < framesArrayTime.length; j++) {
      if (framesArray[j] !== '-') {
        framesArrayTime[j]++
      }
    }
    // console.log("Frames: ", framesArray, "Second: ", secondChance, "Time: ", framesArrayTime)
    resultFramesMatrix.push([...framesArray])
    resultMatrixChanges.push([...framesChanges])
    resultMatrixSecondChance.push([...secondChance])
  }

  const preMatrix = MatrixCombine(resultFramesMatrix, resultMatrixSecondChance, sequenceArray.length, numPages)
  const resultMatrix = MatrixCombine(preMatrix, resultMatrixChanges, sequenceArray.length, numPages)

  return {
    pageFaults,
    resultMatrix
  }
}

// console.log('FIFO: ', FIFO('1 2 3 4 1 2 5 1 2 3 4 5', 3))
// console.log("FIFO: ", FIFO("1 2 3 4 1 2 5 1 2 3 4 5", 4));
// console.log("LRU: ", LRU("1 2 3 4 1 2 5 1 2 3 4 5", 3));
// console.log("LRU: ", LRU("7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0", 3));
// console.log('OPT: ', OPT('1 2 3 4 5 6 2 3 1 2 3', 5))
// console.log("OPT: ", OPT("1 2 3 4 1 2 5 1 2 3 4 5", 4));
// console.log("FIFO+: ", FIFOplus("7 0 1 2 0 3 0 4 2 3 0 3 2 2 3 1", 2));
// console.log("FIFO+: ", FIFOplus("1 2 3 4 1 2 5 1 2 3 4 5", 4 ));
