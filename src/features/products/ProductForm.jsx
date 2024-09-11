import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "./productSlice";

const ProductForm = () => {


    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        category: ""
    });
    const handaleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handaleSubmit = (event) => {
        event.preventDefault();
        dispatch(createProduct({ ...product, id: nanoid() }))

        // form reset code 
        setProduct({
            id: "",
            title: "",
            description: "",
            price: "",
            category: ""
        })
    }
    return (
        <form onSubmit={handaleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={handaleChange} value={product.title} placeholder="title name" required />
            </div>
            <div>
                <label>Descriptions</label>
                <input type="text" name="description" onChange={handaleChange} value={product.description} placeholder="description name" required />
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" onChange={handaleChange} value={product.price} placeholder="price" required />
            </div>
            <div>
                <label>Category</label>
                <input type="text" name="category" onChange={handaleChange} value={product.category} placeholder="category name" required />
            </div>

            <button type="submit">Add Product</button>

        </form>
    );
};

export default ProductForm;