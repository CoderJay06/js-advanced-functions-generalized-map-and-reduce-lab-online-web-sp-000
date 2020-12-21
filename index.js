// Add your functions here

const map = (sourceArray, callback) => {
    const newArray = []
    sourceArray.forEach(value => {
        newArray.push(callback(value))
    });
    return newArray
}

const reduce = (sourceArray, callback, startingVal = 0) => {
    let storedVal = startingVal
<<<<<<< HEAD
    
    if (!sourceArray.every(Number)) {
      storedVal = true 
    } 
    
    for (let value of sourceArray) {
      storedVal = callback(value, storedVal)
    } 
    return storedVal
=======
    if (!sourceArray.every(Number)) {
      storedVal = true 
      for (let value of sourceArray) {
        storedVal = callback(value, storedVal)
      }
    } else {
        for (let value of sourceArray) {
          storedVal = callback(value, storedVal)
        } 
    }
    return storedVal
    // let result
    // let total = 0
    // if (sourceArray.every(Number)) {
    //   sourceArray.forEach(value => {
    //     total += value 
    //   });
    // } else {
    //   sourceArray.forEach(value => {
    //     if (!value) {
    //       total = false
    //     } else {
    //       total = true
    //     }
    //   });
    // }
    // result = callback(total, startingVal)  
    // return result
>>>>>>> f486e8286ea75bf5a88ac5289c3e3a040774dd04
}