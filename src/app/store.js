import { configureStore } from "@reduxjs/toolkit"

import bookReducer from "../features/bookSlice"
import postReducer from "../features/postSlice"

export const store = configureStore({

    reducer: {
        booksR: bookReducer,
        postR: postReducer
    }
})
