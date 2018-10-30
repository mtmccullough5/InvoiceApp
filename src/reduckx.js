// Actions
let nextItemId = 0

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
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
    case 'DELETE_ITEM':
      const tempItems = state.items.filter(item => item.id !== action.id)
      return tempItems 
    default:
      return state
  }
}

export default items