

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "./ProductAPI"

const initialState={
    products:[]
}

export const fetchAllProductsAsync=createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        const {data}=await fetchProducts();
        return data.products

    }
)
export const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllProductsAsync.rejected,(state)=>{
            console.log(state);
        })
        .addCase(fetchAllProductsAsync.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
    }
})
export const {} = productSlice.actions;


export const selectProducts=(state)=>state.product.products;
export default productSlice.reducer;