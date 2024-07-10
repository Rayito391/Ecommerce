import { createContext, useState,useEffect } from "react";//Crear contexto global

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

    //Order
    const [order,setOrder] = useState([]);

    //Get Products
    const [items, setItems] = useState(null)

    //Filtered Items
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      },[])

    const filteredItemsByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items,searchByTitle))
        }
      },[items,searchByTitle])

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
                checkoutOpen,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                setFilteredItems,
                filteredItems
            }
            }>
            {children}
        </ShoppingContext.Provider>
    )
}
