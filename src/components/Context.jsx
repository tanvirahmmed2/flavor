import { createContext, useState } from "react";


export const ShopContext= createContext()

export const ContextProvider=({children})=>{

    const [sidebar, setSidebar]= useState(false)


    const contextValue={
        sidebar, setSidebar,
    }
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}