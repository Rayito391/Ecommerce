import { createContext, useState } from "react";//Crear contexto global

export const ShoppingContext = createContext();


export const ShoppingProvider = ({children}) => {

    //Shopping car
    const [count, setCount] = useState(0);
    const [isOpen,setIsOpen] = useState(false);

    //Open and close
    const OpenProductDetail = () =>setIsOpen(true);
    const CloseProductDetail = () =>setIsOpen(false);

    //Show products
    const [ProductToShow,setProductToShow] = useState({});

    return(
        <ShoppingContext.Provider value={
            {
                count,
                setCount,
                OpenProductDetail,
                CloseProductDetail,
                isOpen,
                ProductToShow,
                setProductToShow
            }
            }>
            {children}
        </ShoppingContext.Provider>
    )
}
