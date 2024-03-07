
"use client"
import { Provider } from "react-redux";
import ShopNav from "./Components/ShopNav";
import { store } from "../Redux/store";

const layout = ({ children }) => {
  return (
    <Provider store={store}>
        <ShopNav/>
        {children}
    </Provider>
  )
}

export default layout