import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts, updateProduct } from "./productSlice";

const ProdutListView = ({ onHandaleUpdate }) => {
    const dispatch = useDispatch();

    const { products, isLoading, error } = useSelector((state) => state.productR);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handaleUpdateProduct = (product) => {
        onHandaleUpdate(product)
    }
    return (
        <div>
            <h1>Hello Pruducts</h1>
            {isLoading && <p>Loading...</p>}
            {error && <h3>{error}</h3>}
            {products && products.length > 0 &&
                <section>
                    {
                        products?.map(product => {
                            return (
                                <article style={{ border: "3px solid gray", padding: "12px", margin: "5px", }} key={product.id}>
                                    <h2>{product?.title}</h2>
                                    <p>{product?.description}</p>
                                    <h4>{product?.category}</h4>
                                    <p>$ {product?.price}</p>

                                    <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>

                                    <button onClick={() => handaleUpdateProduct(product)}>Update</button>
                                </article>
                            )
                        })
                    }
                </section>}

        </div>
    );
};

export default ProdutListView;