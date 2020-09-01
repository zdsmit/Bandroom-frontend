import cuid from 'cuid';
export const cuidFn = cuid;

//creates an initial state with keys for music stores and instruments
export default function ManageMusicStores(state={ musicStores: [], instruments: [] }, action) {
   switch (action.type) {
    default:
      return state
   }
}