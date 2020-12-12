/*
 * @Date: 2020-12-08 14:39:54
 * @LastEditors: eric
 * @LastEditTime: 2020-12-12 22:28:48
 */

var erichen1995 = function () {


  function chunk(array, size = 1) {
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


  function drop(array, n = 1) {
    let result = []
    for(let i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

  function dropRight(array, n = 1) {
    let result = []
    for (let i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  }

  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function findIndex(array, predicate, fromIndex = 0) {
    
  }

  function findLastIndex() {
  
  }

  function flatten(array) {
    let result = []
    array.forEach(item => {
      if (Array.isArray(item)) result.push(...item)
      else result.push(item)
    })
    return result
  }

  function flattenDeep(array, result = []) {
    array.forEach(item => {
      if (Array.isArray(item)) flattenDeep(item, result)
      else result.push(item)  
    })
    return result
  }

  function flattenDepth(array, depth = 1) {
    let result = array
    while(depth) {
      result = flatten(result)
      depth--
    }
    return result
  }

  function fromPairs(pairs) {
    let result = {}
    pairs.forEach(item => {
      result[item[0]] = item[1]
    })
    return result
  }

  function head(array) {
    return array[0]
  }

  function IndexOf() {

  }


  /**
   * @description: 获取数组array中除了最后一个元素之外的所有元素(原数组)
   * @param {*} array
   * @return {*} array 
   */  
  function initial(array) {
    array.length--
    return array
  }


  function join(array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length; i++) {
      if (i === 0) str += array[i]
      else str += separator+ array[i]
    }
    return str
  }

  function last(array) {
    return array[array.length - 1]
  }
  
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i > -1; i--) {
      if (array[i] === value) return i
    }
    return -1
  }


  /**
   * @description: 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
   * @param {array} array
   * @return {array} array 返回返回后的原数组
   */  
  function reverse(array) {
    let n = array.length - 1
    for (let i = 0; i <= n ; i++) {
      if (n == i) break
      let temp = array[i]
      array[i] = array[n]
      array[n] = temp
      n--
    }
    return array
  }

  /**
   * @description: 使用二分查找的方式检索来决定value 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
   * @param {array} array 需要检索的数组
   * @param {number} value 需要插入数组的值
   * @return {number} idx  返回最小的索引位置
   */
  function sortedIndex(array, value) {
    let l = 0
    let r = array.length
    while (l < r) {
      let m = Math.floor((r + l) / 2)
      if (array[m] < value) {
        l = m + 1
      } else {
        r = m
      }
    }
    return r
  }


  return {
    compact,
    chunk,
    drop,
    dropRight,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    IndexOf,
    initial,
    reverse,
    sortedIndex,
    join,
    fill,
    last,
    lastIndexOf,
  }
}()