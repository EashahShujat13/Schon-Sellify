import { combineReducers } from 'redux'
import CartSlice from './CartSlice'
import userToken from './usertoken'


const rootReducers = combineReducers({
    ReducerOne : CartSlice.reducer,
      tokenreducer:userToken.reducer
})


export default rootReducers