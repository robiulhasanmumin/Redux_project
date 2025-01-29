import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../features/videos/videosSlice";
import videoSlice from "../features/video/videoSlice";
import tagsSlice from "../features/tags/tagsSlice"
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice"
import filterSlice from "../features/filter/filterSlice"
import likeDislikeReducer from "../features/like_dislike/likeDislikeSlice";

export const store = configureStore({
    reducer: {
        videos: videosSlice,
        video: videoSlice,
        tags: tagsSlice,
        relatedVideos: relatedVideosSlice,
        filter: filterSlice,
        likeDislike: likeDislikeReducer,
    }
})