// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/*const findAllIndices = (input, arr) => {
  let indices = []
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === input) {
      indices.push(j)
    } //for every element in the array, it checks if it is equal to the imput, and then returns the indices of those matches to an array (indices)
  }
  return indices
}*/


const pAequorFactory = (inputNum, dnaArray) => {
  return {
    specimenNum: inputNum,
    dna: dnaArray,
    mutate() {
      const dnaIndex = [Math.floor(Math.random() * 15)] //find index of array to change
      console.log(dnaIndex)
      const replacedIndexWithRandom = [Math.floor(Math.random() * 3)] //generates an index to determine what will replace the chosen index
      console.log(replacedIndexWithRandom)
      const dnaArrayChoices = ['A', 'T', 'C', 'G'] //the choices

      dnaArray[dnaIndex] = dnaArrayChoices[replacedIndexWithRandom] //reassigns value of chosen index to new value based on dnaArrayChoices 
      console.log(dnaArray)

      return dnaArray
    }
  }
}


const sample = pAequorFactory(1, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C'])

sample.mutate()



