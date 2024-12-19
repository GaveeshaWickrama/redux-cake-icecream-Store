//unlike in createStore in react-toolkit we use configure Store
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'//Even if there are no reducers defined under the reducers key of createSlice, the slice still generates a reducer function that handles the logic defined in the extraReducers field.

const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)// a function is being passes as an argument, and add the midleware we want to that and rturns it back
    
})//acepts an object as the argument

export default store;