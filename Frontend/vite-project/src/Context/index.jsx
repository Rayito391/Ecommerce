import { createContext, useState } from "react";//Crear contexto global

export const ShoppingContext = createContext();


export const ShoppingProvider = ({children}) => {

    //Shopping car
    const [count, setCount] = useState(0);

    //Open and close
    const [isOpen,setIsOpen] = useState(false);
    const OpenProductDetail = () =>setIsOpen(true);
    const CloseProductDetail = () =>setIsOpen(false);

    //Show products
    const [ProductToShow,setProductToShow] = useState({});

    //Add products
    const [ShoppingCar,setShoppingCar] = useState([]);

    //Checkout
    const [checkoutOpen,setCheckoutOpen] = useState(false);
    const OpenCheckout = () => setCheckoutOpen(true);
    const CloseCheckout = () => setCheckoutOpen(false);

    return(
        <ShoppingContext.Provider value={
            {
                count,
                setCount,
                OpenProductDetail,
                CloseProductDetail,
                isOpen,
                ProductToShow,
                setProductToShow,
                ShoppingCar,
                setShoppingCar,
                OpenCheckout,
                CloseCheckout,
                checkoutOpen
            }
            }>
            {children}
        </ShoppingContext.Provider>
    )
}
