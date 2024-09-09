import { useDispatch, useSelector } from "react-redux";
import { bookDelete } from "../features/bookSlice";


const BookList = ({ handaleEdit }) => {
    const dispatch = useDispatch();
    const booksData = useSelector((store) => store.booksR.books)

    const handaleDelete = (id) => {
        dispatch(bookDelete(id))
    }


    return (
        <div>
            <h1>All Books List</h1>

            <ul>
                {
                    booksData && booksData.length > 0 ? booksData.map((items) =>
                        <li key={items.id}> {items.name} {items.author} {items.price}
                            <button onClick={() => handaleDelete(items.id)}>Delete</button>
                            <button onClick={() => handaleEdit(items)}>Edit</button>

                        </li>)
                        : "Book list Now Not Avilable"
                }
            </ul>
        </div>
    );
};

export default BookList;