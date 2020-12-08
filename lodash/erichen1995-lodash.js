var erichen1995 = function () {
  function chunk(array, size) {
    let result = []
    let m = 0
    for (let i = 0; i < array.length; i++) {
      result[m] ? result[m] : result[m] = [] 
      result[m].push(array[i])
      if (result[m].length == size) {
        m++
      }
    }
    return result
  }
  
  function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  return {
    compact,
    chunk,
  }
}()