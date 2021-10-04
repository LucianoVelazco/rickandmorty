const reducer = (state,action) => {
  switch (action.type){
    case 'SET_LIST' :
      return{
        ...state, 
        list:action.payload
      }
      case 'SET_CATEGORIES' :
        return{
          ...state, 
          categories:action.payload
        }
        case 'SET_FILTERLIST' :
          return{
            ...state, 
            filterlist:action.payload
          }
          case 'FILTERLIST' :
            console.log("[reducer]", action.payload)
            let filterList = [...state.list]
            if (action.payload !== ''){
              filterList = [...state.list].filter(item => {
                return item.name.toString().toLowerCase().includes(action.payload.toString().toLowerCase())
              })
            }
            return{
              ...state, 
              filterlist:filterList

            }
            case 'ADD_COMPARELIST' :
          return{
            ...state, 
            comparelist:[...state.comparelist, action.payload]
          }
          case 'REMOVE_COMPARELIST' :
            const filterlist = [...state.comparelist].filter(item => (item.name !== action.payload))
            return{
              ...state, 
              comparelist:filterlist
            }
    default: 
      return state
  }
}

export default reducer