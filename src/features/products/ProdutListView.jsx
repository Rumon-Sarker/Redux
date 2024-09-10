import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProdutListView = () => {
    const dispatch = useDispatch();

    const { products, isLoading, error } = useSelector((state) => state.productR);
    console.log("Products data", products)

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
                        products.map(product => {
                            return (
                                <article style={{ border: "3px solid gray", padding: "12px", margin: "5px", }} key={product.id}>
                                    <h2>{product.title}</h2>
                                </article>
                            )
                        })
                    }
                </section>}

        </div>
    );
};

export default ProdutListView;