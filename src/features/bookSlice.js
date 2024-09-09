import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, name: "FF", price: 12, author: "Rumon" },
        { id: 2, name: "AF", price: 16, author: "Rumon" },
        { id: 3, name: "FG", price: 32, author: "Rumon" }
    ]
};

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        bookDelete: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        }
    }
});

export const { bookDelete } = bookSlice.actions;

export default bookSlice.reducer