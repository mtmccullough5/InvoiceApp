// Actions
let nextItemId = 0

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  newItem: {
    id: nextItemId++,
    itemName: item.itemName,
    itemQuantity: Number.parseFloat(item.itemQuantity).toFixed(0),
    itemCost: Number.parseFloat(item.itemCost).toFixed(2),
    lineCost: Number.parseFloat(item.lineCost).toFixed(2)
  }
})

export const updateItem = (item) => ({
  type: 'UPDATE_ITEM',
  updateItem: {
    id: item.id,
    itemName: item.itemName,
    itemQuantity: Number.parseFloat(item.itemQuantity).toFixed(0),
    itemCost: Number.parseFloat(item.itemCost).toFixed(2),
    lineCost: Number.parseFloat(item.lineCost).toFixed(2)
  }
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
        action.newItem
      ]
      return newState
    case 'UPDATE_ITEM':
      let updateState = state.map((item) => {
        if (item.id === action.updateItem.id){
          item = action.updateItem
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