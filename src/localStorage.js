export const loadState = () => {
  try {
      const serializedState = localStorage.getItem('state')
      if (serializedState)
          return JSON.parse(serializedState)
  } catch (err) {
      console.error(`Unable to load state. Error: ${err.message}`)
  }
  return undefined
}

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
      console.info('saved state')
  } catch (err) {
      console.error(`Unable to save state. Error: ${err.message}`)
  }
}