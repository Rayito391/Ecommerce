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
    
    const filteredItemsByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByCategory = (items,searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }


    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      },[])
    

    const filterBy = (searchType,items,searchByTitle,searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items,searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return items
        }
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        }
        else if (searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        }
        else if (!searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        }
        else if (!searchByCategory && !searchByTitle) {
            setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
        }

      },[items,searchByTitle,searchByCategory])

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
                filteredItems,
                searchByCategory,
                setSearchByCategory
            }
            }>
            {children}
        </ShoppingContext.Provider>
    )
}
