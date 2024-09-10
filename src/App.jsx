import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import PostView from "./components/postView";
import ProdutListView from "./features/products/ProdutListView";

const App = () => {

  const [bookEdit, setBookEdit] = useState(null);

  const handaleEdit = (book) => {
    setBookEdit(book)
  }

  const handaleChange = () => {
    setBookEdit(null)
  }

  return (
    <div>
      <h1> app component upadating</h1>
      <BookForm bookEdit={bookEdit} onCancel={handaleChange} />
      <BookList handaleEdit={handaleEdit} />
      <PostView />

      <ProdutListView />
    </div>
  );
};

export default App;