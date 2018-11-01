// Actions
let nextItemId = 0

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  item
})

export const updateItem = (item) => ({
  type: 'UPDATE_ITEM',
  item
})

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  id
})

// Reducer
const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let newState = [
        ...state,
        { id: action.id,
          itemName: action.item.itemName,
          itemQuantity: action.item.itemQuantity,
          itemCost: action.item.itemCost,
          lineCost: action.item.lineCost
        }
      ]
      return newState
    case 'UPDATE_ITEM':
      let updateState = state.map((item) => {
        if (item.id === action.id){
          item = action.item
        }
        return item
      })
      return updateState
    case 'DELETE_ITEM':
      const delState = state.filter(index => index.id !== action.id)
      return delState 
    default:
      return state
  }
}

export default items