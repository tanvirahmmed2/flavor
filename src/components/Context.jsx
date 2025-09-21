import { createContext, useState } from "react";
import { foods } from "../data/food";


export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [foodItems, setFoodItems] = useState(foods);
    const [cartItem, setCartItem] = useState([]);
    const [savedItem, setSavedItem] = useState([])



    const addToCart = (id) => {
        const numericId = Number(id);
        setCartItem((prev) => {
            const existItem = prev.find((data) => data.id === numericId);

            if (existItem) {
                return prev.map((item) =>
                    item.id === numericId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const selectedItem = foodItems.find((item) => item.id === numericId);
                if (selectedItem) {
                    return [...prev, { ...selectedItem, quantity: 1 }];
                }
                return prev;
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItem((prev) =>
            prev
                .map((item) =>
                    item.id === Number(id)
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const getTotalAmount = () => {
        let totalAmount = 0;

        for (const item of cartItem) {
            totalAmount += item.new_price * item.quantity;
        }

        return totalAmount;
    };



    const addToSave = (id) => {
        const numericId = Number(id);
        setSavedItem((prev) => {
            const existItem = prev.find((data) => data.id === numericId);

            if (existItem) {
                return prev.map((item) =>
                    item.id === numericId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const selectedItem = foodItems.find((item) => item.id === numericId);
                if (selectedItem) {
                    return [...prev, { ...selectedItem, quantity: 1 }];
                }
                return prev;
            }
        });
    };

    const removeFromSave = (id) => {
        setSavedItem((prev) =>
            prev
                .map((item) =>
                    item.id === Number(id)
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };





    const contextValue = {
        sidebar, setSidebar,
        foodItems, setFoodItems,
        cartItem, setCartItem,
        addToCart, removeFromCart,
        savedItem, setSavedItem,
        addToSave, removeFromSave,
        getTotalAmount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
