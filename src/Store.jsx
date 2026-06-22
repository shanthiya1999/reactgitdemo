import {configureStore} from '@reduxjs/toolkit'
import {SavingsSlice} from './Slice'

export const Store=configureStore({
    reducer:{
        savings:SavingsSlice.reducer

    }
})