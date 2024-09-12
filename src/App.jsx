import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import PostView from "./components/postView";
import ProdutListView from "./features/products/ProdutListView";
import ProductForm from "./features/products/ProductForm";

const App = () => {

  const [bookEdit, setBookEdit] = useState(null);

  const [isEdit, setIsEdit] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(null);

  const handaleEdit = (book) => {
    setBookEdit(book)
  }

  const handaleChange = () => {
    setBookEdit(null)
  };


  const handaleUpdateProduct = (product) => {
    setUpdateProduct(product);
    setIsEdit(true);

  }

  return (
    <div>
      <h1> app component upadating</h1>
      <BookForm bookEdit={bookEdit} onCancel={handaleChange} />
      <BookList handaleEdit={handaleEdit} />
      <PostView />

      <ProdutListView onHandaleUpdate={handaleUpdateProduct} />
      <ProductForm updateProductData={updateProduct} isEdit={isEdit} />
    </div>
  );
};

export default App;