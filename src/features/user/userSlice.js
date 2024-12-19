import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: '',
}


//main benifit here is asyncTHunk generates pending,fulfilled an rejected action types based on the result of the promise and dispatch
//them automatically

//But note that since these reducers are not gebnerated by the slice and therefore have to be added as extra reducers
export const fetchUsers = createAsyncThunk('user/fetchUsers', (dispatch) => 
    
// takes 2 arguments (Remeber this is also an action creator).Hence the type is argument
//[slice_name/reducer].Here it's 'user/fetchUsers'. next argument is a callback function to create the payload
//The main 2 things we return in an action creator(Not applied to here)
    {
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)// no need of catch block as the error is handled

            //this AscyncThunk dispatches the lifecycle methods of a promise as actions
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending,(state) => { //automatically prefix 'user' is added .SO the final action type for this is 
        // 'user/fetchUsers/pending'
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action) => { 
            // 'user/fetchUsers/fulfilled'
                state.loading = false,
                state.users = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action) => { 
            // 'user/fetchUsers/rejected'
                state.loading = false,
                state.users = [],
                state.error = action.error.message
        })
    }

})

export default userSlice.reducer//Even if there are no reducers defined under the reducers key of createSlice, the slice still generates a reducer function that handles the logic defined in the extraReducers field.

// module.exports.userActions = userSlice.actions
//No need to export `userSlice.actions` because there are no reducers defined in the `reducers` field.
//module.exports.fetchUsers = fetchUsers