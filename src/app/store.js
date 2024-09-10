import { configureStore } from "@reduxjs/toolkit"

import bookReducer from "../features/bookSlice"
import postReducer from "../features/postSlice"
import productReducer from "../features/products/productSlice"

export const store = configureStore({

    reducer: {
        booksR: bookReducer,
        postR: postReducer,
        productR: productReducer
    }
})
