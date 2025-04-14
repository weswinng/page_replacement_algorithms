// Algorititmos de reemplazo de paginas
// Input: secuencia(string) y numero de paginas(int)
// Output: numero de fallos de pagina(int), secuencia de paginas(matriz)

// FIFO
function FIFO(sequence, numPages) {
    let sequenceArray = sequence.split(' ').map(Number);
    let pageFaults = 0;
    let framesArray = new Array(numPages).fill("-");
    let framesArrayTime = new Array(numPages).fill(0);
    let resultMatrix = [];

    for (let i = 0; i < sequenceArray.length; i++) {
        let page = sequenceArray[i];
        if (!framesArray.includes(page)) {
            pageFaults++;
            if (framesArray.includes("-")){
                for (let j = 0; j < framesArray.length; j++){
                    if (framesArray[j] == "-"){
                        framesArray[j] = page;
                        framesArrayTime[j] = 0;
                        break;
                    }
                }
            } else {
                let indexTime = framesArrayTime.indexOf(Math.max(...framesArrayTime));
                framesArray[indexTime] = page;
                framesArrayTime[indexTime] = 0;
            }
        } 
        for (let j = 0; j < framesArrayTime.length; j++){
            if (framesArray[j] != "-"){
                framesArrayTime[j]++;
            }
        }
        console.log("Vector: ", framesArray , "Tiempos: ", framesArrayTime);
        resultMatrix.push([...framesArray]);
    }
    return {
        pageFaults,
        resultMatrix
    };
}

// LRU

// OPT
