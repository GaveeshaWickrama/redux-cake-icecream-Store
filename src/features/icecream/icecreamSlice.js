import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    noOfIcecreams:  20
}

const icecreamSlice = createSlice({
    name: 'icecream' ,
    initialState,
    reducers: {
        ordered: (state)=>{
            state.noOfIcecreams--
        },
        restocked: (state,action) => {
            state.noOfIcecreams += action.payload
        }
    },
    extraReducers: (builder) => {//extrareducers is a function
        // builder.addCase('cake/ordered', (state) => {
        //     state.noOfIcecreams--;
        // });
        builder.addCase(cakeOrdered, (state) => { // reason why this works although cakeActions.ordered is an acton creator
        //function is redux-toolkit can extract the type from that and why not use () is because we don't invoke the function here
            state.noOfIcecreams--;
        });
    }
    
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions

