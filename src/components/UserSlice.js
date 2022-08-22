import { createSlice, createAsyncThunk } from '@redux.js/toolkit'
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
}
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://covidnigeria.herokuapp.com/api')
        .then((response) => response.data)
});

const UserSlice = createSlice({
    name: 'user',
    initialState,
    extraReducer: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = true
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})

export default UserSlice.reducer