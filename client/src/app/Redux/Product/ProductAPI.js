import axios from "axios"

export const fetchProducts=async()=>{
    try {
       return await axios.get("https://dummyjson.com/products");
    } catch (error) {
        console.log(error)
    }
}