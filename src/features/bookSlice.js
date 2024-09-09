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
        bookUpdate: (state, action) => {
            const { id, name, author, price } = action.payload;
            const existingBook = state.books.find((book) => book.id === id);
            if (existingBook) {
                existingBook.name = name;
                existingBook.author = author;
                existingBook.price = price;
            }
        },
        bookDelete: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const { bookDelete, addBook, bookUpdate } = bookSlice.actions;

export default bookSlice.reducer