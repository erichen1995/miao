/*
 * @Date: 2020-12-08 14:39:54
 * @LastEditors: eric
 * @LastEditTime: 2020-12-27 20:16:04
 */

var erichen1995 = function () {


  /**
   * @description: 传入一个值,将它作为对象原型的toString方法的值
   * @param {*} val
   * @return {string} 
   */
  function checkType (val) {
    return Object.prototype.toString.call(val)
  }

  /**
   * @description: 输入predicate 根据其类型返回一个函数
   * @param {*} predicate
   * @return {function}
   */
  function iteratee(predicate) {
    let type = checkType(predicate)
    if (type == '[object Function]') return predicate
    if (type == '[object Array]') return (item) => item[predicate[0]] == predicate[1]
    if (type == '[object Object]') return isEqual.bind(null, predicate)
    if (type == '[object String]') return item => item[predicate]
  }


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
    for (let i = n; i < array.length; i++) {
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

  /**
   * @description: 返回第一个通过 predicate 判断为真值的元素的索引值
   * @param {array} array
   * @param {function} predicate
   * @param {number} fromIndex
   * @return {number}
   */
  function findIndex(array, predicate = identify, fromIndex = 0) {
    for(let i = fromIndex; i  < array.length; i++) {
      predicate = iteratee(predicate)
      if(predicate(array[i])) return i
    }
  }

  /**
   * @description: 从右到左 返回第一个通过 predicate 判断为真值的元素的索引值
   * @param {*} array
   * @param {*} predicate
   * @param {*} fromIndex
   * @return {*}
   */
  function findLastIndex(array, predicate = identify, fromIndex = array.length - 1) {
    for (let i = fromIndex; i > -1; i--) {
      predicate = iteratee(predicate)
      if(predicate(array[i])) return i
    }
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
    while (depth) {
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
      else str += separator + '' + array[i]
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
    for (let i = 0; i <= n; i++) {
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

  /**
   * @description: 返回第一个接收的参数
   * @param {any} value
   * @return {*} value
   */

  function identify(value) {
    return value
  }

  /**
 * @description: 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
 * @param {object} object
 * @param {object} source
 * @return {boolean}
 */

  function isMatch(object, source) {
    for (let key in source) {
      if (source[key] && typeof source[key] == 'object') {
        if (!isMatch(source[key], object[key])) {
          return false
        }
      } else {
        if (object[key] !== source[key]) {
          return false
        }
      }
    }
    return true
  }

  function matches(source) {
    return bind(isMatch, null, window, source)
  }

  function matchesProperty(path, srcValue) {
    return function (obj) {
      return (isEqual(get(obj, path), srcValue))
    }
  }

  /**
   * @description: 
   * @param {*} value
   * @param {*} other
   * @return {*}
   */

  function isEqual(value, other) {
    if (value === other) return true
    if (value == null || typeof value != 'object' || other == null || typeof other != 'object') return false
    let propsInValue = 0, propsInOther = 0
    for (let prop in value) {
      propsInValue += 1
    }
    for (let prop in other) {
      propsInOther += 1
      if (!(prop in value) || !isEqual(value[prop], other[prop])) return false
    }
    return propsInValue == propsInOther
  }

  function filter(collection, predicate = identify) {

  }


  function bind(f, thisArg, ...partials) {
    return function (...args) {
      let copy = partials.slice()
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] === window) {
          copy[i] = args.shift()
        }
      }
      return f.call(thisArg, ...copy, ...args)
    }
  }

  /**
   * @description: 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
   *               暂无法实现 'a[0].b.c' 带[]的字符串
   * @param {object} object 要检索的对象
   * @param {*} path
   * @param {*} defaultValue
   * @return {*}
   */
  function get(object, path, defaultValue) {
    let paths = []
    if (typeof path == 'string') {
      paths = path.split('.')
    } else if (Array.isArray(path)) {
      paths = path
    }
    for (let key of paths) {
      if (key in Object(object)) {
        object = object[key]
      } else {
        return defaultValue
      }
    }
    return object
  }

  /**
   * @description: 创建一个返回给定 对象 的 path 的值的函数
   * @param {array | string} path
   * @return {function} 返回新的函数
   */
  function property(path) {
    return function (obj) {
      return get(obj, path)
    }
  }

  /**
   * @description: 创建一个调用 func 的函数.调用 func 时最多接受 n 个参数, 忽略多出的参数
   * @param {function} func
   * @param {number} n = func.length
   * @return {function}
   */
  function ary(func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  }

  function before(n, func) {
    let c = 0
    let result
    return function (...args) {
      if (c < n) {
        return result = func.call(this, ...args)
        c++
      } else {
        return result
      }
    }
  }

  function after(n, func) {
    let c = 0
    return function (...arg) {
      if (c > n) return result = func.call(this, ...args)
      c++
    }
  }

  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }


  function negate(predicate) {
    return function (...args) {
      return !predicate(...args)
    }
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
    join,
    last,
    lastIndexOf,
    reverse,
    sortedIndex,
    identify,
    isMatch,
    matches,
    matchesProperty,
    isEqual,
    filter,
    bind,
    get,
    property,
    ary,
    before,
    after,
    flip,
    negate,
  }
}()