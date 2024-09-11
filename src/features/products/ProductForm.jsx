import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "./productSlice";

const ProductForm = ({ updateProductData = {}, isEdit = false }) => {
    // console.log("form update data", updateProduct)

    console.log(isEdit);
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

    useEffect(() => {
        if (updateProductData) {
            setProduct(updateProductData)
        }
    }, [updateProductData])

    const handaleSubmit = (event) => {
        event.preventDefault();

        if (isEdit) {
            dispatch(updateProduct({ id: product.id, product }))
        }
        else {
            dispatch(createProduct({ ...product, id: nanoid() }))

        }

        // form reset code 
        setProduct({
            id: "",
            title: "",
            description: "",
            price: "",
            category: ""
        })
    }


    console.log("efect data", product);

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

            <button type="submit">{isEdit ? "Update Product" : "Add Product"}</button>

        </form>
    );
};

export default ProductForm;