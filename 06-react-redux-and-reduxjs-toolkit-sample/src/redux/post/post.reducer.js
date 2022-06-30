import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('post/getPosts', async (arg, props) => {
    const { fulfillWithValue, rejectWithValue, getState } = props;
    const state = getState();
    console.log(state);
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        if(result.length) return fulfillWithValue(result);
        else return rejectWithValue('rejected');
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        status: null,
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [getPosts.pending] : (state, action) => {
            state.status = 'loading';
        },
        [getPosts.fulfilled] : (state, action) => {
            state.posts = action.payload;
            state.status = 'success';
        },
        [getPosts.rejected] : (state, action) => {
            state.status = 'failed'
        },
    }
})

export const {increment, decrement, incrementByAmount } = postSlice.actions;
export default postSlice.reducer;