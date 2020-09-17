import cuid from 'cuid';
export const cuidFn = cuid;

//creates an initial state with keys for music stores and instruments, as well as a boolean to indicate whether it is currently loading
export default function ManageMusicStores(state={ musicStores: [], instruments: [], loading: false }, action) {
   switch (action.type) {
    case 'LOADING_MUSIC_STORES':
     return {
      ...state,
      musicStores: [...state.musicStores],
      loading: true
     }
    case 'GET_MUSIC_STORES':
      return {
       ...state,
       musicStores: action.musicStores,
       loading: false
    }
    case 'DELETE_MUSIC_STORE':
      return {
        musicStores: state.musicStores.filter(musicStore => musicStore.id !== action.id)
      }
    default:
     return state
   }
}