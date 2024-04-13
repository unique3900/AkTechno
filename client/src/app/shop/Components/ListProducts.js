"use client"

import { fetchAllProductsAsync, selectProducts } from "@/app/Redux/Product/ProductSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const ListProducts = () => {
    const dispatch=useDispatch();
    const products=useSelector(selectProducts)

    useEffect(() => {

        dispatch(fetchAllProductsAsync());
        console.log(products)
    }, [])
    
  return (
    <div className="flex flex-row flex-wrap items-center justify-around gap-4 px-6 mt-6">
        {products?.map((item,index)=>(
            <div key={index} className="flex flex-col gap-4 w-[27rem] shadow-md rounded-md p-4">
              <img src={item.thumbnail} alt={item.title} className="h-[18rem] object-cover"/>
              <h3 className="text-2xl font-bold text-center">{item.title}</h3>
              <p className="">{item.description.slice(0,40)+"...."}</p>
              <p className="text-end text-red-700">NRS {Math.floor(item.price-item.price*(item.discountPercentage/100)) }</p>
            </div>
        ))}

    </div>
  )
}

export default ListProducts