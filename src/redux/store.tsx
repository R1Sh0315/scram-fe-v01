import {  configureStore} from '@reduxjs/toolkit'
import scramReducer from './scramSlice'

export const store = configureStore({
    reducer:{
        scramStates : scramReducer
    }
})

