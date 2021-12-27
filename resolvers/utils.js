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

