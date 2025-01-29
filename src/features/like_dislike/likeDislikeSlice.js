import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLikeDislike } from "./likeDislikeAPI";

export const fetchLikeDislike = createAsyncThunk('/video/fetchVideo', async (id)=>{
    const video = await getLikeDislike(id)
    return video;
})


const initialState = {
    likes: 100,
    dislikes: 50,
}
const likeDislikeSlice = createSlice({
    name: "likeDislike",
    initialState,
    reducers: {
        incrementLike: (state) => {
            state.likes += 1;
            state.dislikes -= 1;
        },
        incrementDislike: (state) => {
            state.dislikes += 1;
            state.likes -= 1;
        },
    },
     extraReducers: (builder) => {
            builder
                .addCase(fetchLikeDislike.pending, (state, action) => {
                    state.loading = true;
                })
                .addCase(fetchLikeDislike.fulfilled, (state, action) => {
                    state.video = action.payload;
                    state.loading = false;
                    state.error = null;
                })
                .addCase(fetchLikeDislike.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        }
});

export const { incrementLike, incrementDislike } = likeDislikeSlice.actions;

export default likeDislikeSlice.reducer;