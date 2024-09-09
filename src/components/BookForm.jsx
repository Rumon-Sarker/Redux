import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, bookUpdate } from "../features/bookSlice";


const BookForm = ({ bookEdit, onCancel }) => {
    const dispatch = useDispatch();
    const [book, setBook] = useState({
        name: "",
        price: "",
        author: ""
    })

    console.log("ggg", bookEdit)

    useEffect(() => {
        if (bookEdit) {
            setBook(bookEdit)
        }
    }, [bookEdit])

    const handaleChange = (event) => {
        const { name, value } = event.target;
        setBook((prevBooks) => ({ ...prevBooks, [name]: value }))
    };

    const handaleSubmit = (event) => {
        event.preventDefault();
        if (bookEdit) {
            dispatch(bookUpdate(book))
        }
        else {
            dispatch(addBook({ ...book, id: nanoid() }))
        }
        setBook({
            name: "",
            price: "",
            author: ""
        })


    }
    return (
        <form onSubmit={handaleSubmit}>
            <input
                type="text"
                name="name"
                value={book.name}
                placeholder="Book Name"
                onChange={handaleChange}
                required
            />
            <br />

            <input
                type="number"
                name="price"
                value={book.price}
                placeholder="Book Price"
                onChange={handaleChange}
                required
            />
            <br />

            <input
                type="text"
                name="author"
                value={book.author}
                placeholder="Book Author Name"
                onChange={handaleChange}
                required
            />
            <br />

            <button type="submit">
                {bookEdit ? "Update Book" : "Add Book"}
            </button>
            {bookEdit && <button onClick={onCancel}>Cancel</button>}
        </form>
    );
};

export default BookForm;