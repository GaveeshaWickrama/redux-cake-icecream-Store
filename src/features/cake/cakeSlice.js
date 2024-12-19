import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noOfCakes: 10,
}

//createSlice function takes 3 arguments
const cakeSlice = createSlice({
    name: 'cake',
    initialState, //initialState key,value pairs are same.So calling by just the name is ok
    reducers: {
        ordered: (state) => {
            state.noOfCakes--;//the main advantage of this is we can change the state like the state is a mutable object(where as under 
            // the hood this is done by immer).Also no need to explicitly return state object 
        },
        restocked: (state, action) => {
            state.noOfCakes += action.payload;
        },
    }
})

//The createSlice function automatically generates this combined reducer for you and makes it available via cakeSlice.reducer. That is why
// we can export as reducer
export default cakeSlice.reducer //default export, can be given any name when importing
export const { ordered, restocked } =  cakeSlice.actions //when importing { cakeActions } has to be used

//create slice will automatically create the actions with the same name as reducer functions( i.e ordered and restocked )

//how the action type would be 'cake/orderd' (name of the slice)/key of the reducer