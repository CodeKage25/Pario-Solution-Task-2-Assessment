import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { action } from 'history';


export const getPosts = createAsyncThunk('posts/getData', async () => {
    return fetch("https://covidnigeria.herokuapp.com/api").then((res) =>
        res.json()
    );
})

const postSlice = createSlice(({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },

    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
        },

    }


}));

export default postSlice.reducer;