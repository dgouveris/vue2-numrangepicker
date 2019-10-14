
export function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isDateObejct (value) {
  return value instanceof Number
}

export function isValidDate (date) {
  if (date === null || date === undefined || date === '') {
    return false
  }
  return !isNaN(new Number(date).valueOf())
}

export function isValidRangeDate (date) {
  return (
    Array.isArray(date) &&
    date.length === 2 &&
    isValidDate(date[0]) &&
    isValidDate(date[1]) &&
    (new Number(date[1]).valueOf() >= new Number(date[0]).valueOf())
  )
}

export function formatDate (date, format) {
  if (date === null || date === undefined || date === '') {
    return ''
  }
  try {
    return date.toString()
  } catch (e) {
    return ''
  }
}

export function parseDate (value, format) {
  try {
    // return parseInt(value, 10) || null
    var r = parseInt(value, 10)
    return !isNaN(r) ? r : null
  } catch (e) {
    return null
  }
}

export function throttle (action, delay) {
  let lastRun = 0
  let timeout = null
  return function () {
    if (timeout) {
      return
    }
    const args = arguments
    const elapsed = Date.now() - lastRun
    const callBack = () => {
      lastRun = Date.now()
      timeout = null
      action.apply(this, args)
    }
    if (elapsed >= delay) {
      callBack()
    } else {
      timeout = setTimeout(callBack, delay)
    }
  }
}
