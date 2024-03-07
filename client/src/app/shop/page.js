"use client"
import { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import {  fetchAllProductsAsync, selectProducts } from "../Redux/Product/ProductSlice";
import { store } from "../Redux/store";

const page = () => {
    const dispatch=useDispatch();
    const product=useSelector(selectProducts)

    useEffect(() => {
        dispatch(fetchAllProductsAsync())
        console.log(product)
    }, [])
    
  return (
    <div>
        <h1>Shop Now</h1>
    </div>
  )
}

export default page