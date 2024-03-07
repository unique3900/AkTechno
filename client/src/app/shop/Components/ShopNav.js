"use client"
import { useEffect } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync, selectProducts } from "../../Redux/Product/ProductSlice";

const ShopNav = () => {
    const dispatch=useDispatch();
    const products=useSelector(selectProducts)
    useEffect(() => {
        dispatch(fetchAllProductsAsync())
    }, [])
    
  return (
    <div className="w-11/12 mt-6 px-6 py-4 mx-auto flex flex-row gap-4 items-center justify-end bg-slate-400/50">
    <FaBasketShopping  size={28} className="text-red-700"/> <span className="font-bold">{products.length} items</span>
</div>
  )
}

export default ShopNav