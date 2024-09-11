import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "./productSlice";

const ProdutListView = () => {
    const dispatch = useDispatch();

    const { products, isLoading, error } = useSelector((state) => state.productR);
    console.log(products)


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    return (
        <div>
            <h1>Hello Pruducts</h1>
            {isLoading && <p>Loading...</p>}
            {error && <h3>{error}</h3>}
            {products && products.length > 0 &&
                <section>
                    {
                        products?.map(product => {
                            console.log("map product", product)
                            return (
                                <article style={{ border: "3px solid gray", padding: "12px", margin: "5px", }} key={product.id}>
                                    <h2>{product?.title}</h2>
                                    <p>{product?.description}</p>
                                    <h4>{product?.category}</h4>
                                    <p>$ {product?.price}</p>

                                    <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                                </article>
                            )
                        })
                    }
                </section>}

        </div>
    );
};

export default ProdutListView;