import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fatchPost = createAsyncThunk("posts/fetchPost", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fatchPost.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fatchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null
        })
        builder.addCase(fatchPost.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = null;
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;