import { isValidDate } from './index'

export const transformDate = {
  number: {
    value2date: (value) => isValidDate(value) ? Number(value) : null,
    date2value: (date) => date
  }
}
