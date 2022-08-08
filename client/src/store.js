import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/posts.js"
export const store=configureStore({

    reducer:{
        posts:postReducer,
    }
})