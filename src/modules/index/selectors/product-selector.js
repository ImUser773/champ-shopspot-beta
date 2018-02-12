import createSelector from 'reselect'

const getProduct = state => {
  console.log('work')
  return state
}

export const test = () => createSelector(
  [ getProduct ],
  state => state
)