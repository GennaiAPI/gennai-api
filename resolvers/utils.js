const DEFAULT_OFFSET = 0
const DEFAULT_LIMIT = 100
const DEFAULT_ORDER = 'asc'
const DEFAULT_ORDER_BY = 'id'

const getOffset = (options) => {
  return options?.offset ? options.offset : DEFAULT_OFFSET
}

const getLimit = (options) => {
  return options?.limit ? options.limit : DEFAULT_LIMIT
}

const getOrder = (options) => {
  return options?.order ? options.order : DEFAULT_ORDER
}

const getOrderBy = (options) => {
  const obj = {}
  if (options?.orderBy) {
    obj[options.orderBy] = getOrder(options)
  } else {
    obj[DEFAULT_ORDER_BY] = getOrder(options)
  }
  return obj
}

export const getOptions = (options) => {
  return {
    skip: getOffset(options),
    take: getLimit(options),
    orderBy: getOrderBy(options)
  }
}

export const getConnectAndDisconnect = (oldA, newA, property) => {
  const oldArrayIds = Array.isArray(oldA) ? oldA.map(oA => parseInt(oA?.id)).sort() : []
  const newArrayIds = Array.isArray(newA) ? newA.map(nA => parseInt(nA?.id)).sort() : []
  if (arrayEquals(oldArrayIds, newArrayIds)) {
    return null
  } else {
    return {
      [property]: {
        ...getArrayToDisconnect(oldArrayIds, newArrayIds),
        ...getArrayToConnect(oldArrayIds, newArrayIds)
      }
    }
  }
}

const getArrayToDisconnect = (oldA, newA) => {
  const items = oldA.filter(a => newA ? !newA.includes(a) : false)
  if (items.length) {
    return {
      disconnect: [
        ...items.map(a => { return { id: a } })
      ]
    }
  } else {
    return null
  }
}

const getArrayToConnect = (oldA, newA) => {
  const items = newA.filter(a => oldA ? !oldA.includes(a) : false)
  if (items.length) {
    return {
      connect: [
        ...items.map(a => { return { id: a } })
      ]
    }
  } else {
    return null
  }
}

export const changeSingleProperty = (oldO, newO, property) => {
  if (parseInt(oldO.id) !== parseInt(newO.id)) {
    return {
      [property]: {
        disconnect: {
          id: oldO.id
        },
        connect: {
          id: newO.id
        }
      }
    }
  } else {

    return null
  }
}

const arrayEquals = (a, b) => {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

// export const getChanged = ()

