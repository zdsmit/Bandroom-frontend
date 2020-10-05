//creates an initial state with keys for music stores and instruments, as well as a boolean to indicate whether it is currently loading
export default function ManageResources(state={ musicStores: [], instruments: [], loading: false }, action) {
   switch (action.type) {
     case 'LOADING_MUSIC_STORES':
      return {
        ...state,
        musicStores: [...state.musicStores],
        loading: true
      }
     case 'LOADING_INSTRUMENTS':
       return {
         ...state, instruments: [...state.instruments],
         loading: true
       }
     case 'GET_MUSIC_STORES':
       return {
         ...state,
         musicStores: action.musicStores,
         loading: false
       }
     case 'GET_INSTRUMENTS':
       return {
         ...state,
         instruments: action.instruments,
         loading: false
       }
     default:
      return state
   }
}