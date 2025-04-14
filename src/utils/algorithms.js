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
        console.log("Frames Array: ", framesArray);
        resultMatrix.push([...framesArray]);
    }
    return {
        pageFaults,
        resultMatrix
    };
}

//console.log(FIFO("7 0 1 2 0 3 0 4 2 3", 3));

// LRU
function LRU(sequence, numPages) {
    let sequenceArray = sequence.split(' ').map(Number);
    let pageFaults = 0;
    let framesArray = new Array(numPages).fill("-");
    let resultMatrix = [];
    let framesArrayTime = []

    for (let i = 0; i < sequenceArray.length; i++) {
        let page = sequenceArray[i];
        if (!framesArray.includes(page)) {
            pageFaults++;
            if (framesArray.includes("-")){
                for (let j = 0; j < framesArray.length; j++){
                    if (framesArray[j] == "-"){
                        framesArray[j] = page;
                        break;
                    }
                }
            } else {
                framesArrayTime = []
                for (let j = i - 1; j >= 1; j--){
                    if (framesArrayTime.length < framesArray.length - 1){
                        if (!framesArrayTime.includes(sequenceArray[j])){
                            framesArrayTime.push(sequenceArray[j]);
                        } 
                    }
                }
                let indexTime
                for (let j = 0; j < framesArray.length; j++){
                    if (!framesArrayTime.includes(framesArray[j])){
                        indexTime = framesArray.indexOf(framesArray[j]);
                        framesArray[indexTime] = page;
                        break;
                    }
                }
            }
        }
        console.log("Frames Array: ", framesArray, "Frames Array Time: ", framesArrayTime);
        resultMatrix.push([...framesArray]);
    }
    return {
        pageFaults,
        resultMatrix
    };
}

console.log(LRU("7 0 1 2 0 3 0 4 2 3", 3));

// OPT
