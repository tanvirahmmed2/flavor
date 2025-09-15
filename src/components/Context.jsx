import { createContext, useState } from "react";
import { foods } from "../data/food";


export const ShopContext= createContext()

export const ContextProvider=({children})=>{

    const [sidebar, setSidebar]= useState(false)
    const [foodItems, setFoodItems]= useState(foods)


    const contextValue={
        sidebar, setSidebar,
        foodItems, setFoodItems,
    }
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}