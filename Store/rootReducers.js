import { combineReducers } from 'redux'
import CartSlice from './CartSlice'



const rootReducers = combineReducers({
    ReducerOne : CartSlice.reducer
})


export default rootReducers