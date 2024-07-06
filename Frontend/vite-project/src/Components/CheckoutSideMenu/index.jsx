import { useContext } from 'react';
import { Link } from "react-router-dom";

import { ShoppingContext } from "../../Context";
import OrderCard from '../OrderCard';
import { totalPrice } from "../../Utils";

import './style.css'
const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.ShoppingCar.filter(product => product.id != id)
        context.setShoppingCar(filteredProducts)
        context.setCount(context.count - 1);
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date: '05.07.24',
            products: context.ShoppingCar,
            totalProducts: context.ShoppingCar.length,
            totalPrice: totalPrice(context.ShoppingCar)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setShoppingCar([])
        context.setCount(context.count = 0)
        context.CloseCheckout()
    }

    return(
        <aside className={`${context.checkoutOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed  top-20 right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.CloseCheckout()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.ShoppingCar.map(product => (
                        <OrderCard
                            key={product.id}
                            id = {product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                            handleDelete = {handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>
                        Total:    
                    </span>
                    <span className='font-medium text-2xl mr-5 mb-2'>
                        ${totalPrice(context.ShoppingCar)}
                    </span>
                </p>
                <Link to={'/myorders/last'}>
                    <button 
                        className={`w-full mt-3 rounded-lg py-3 text-white bg-black ${context.ShoppingCar.length === 0 ? 'text-white/40 bg-black/40 cursor-not-allowed' : ''}`}
                        onClick={()=>handleCheckout()}
                        disabled={context.ShoppingCar.length === 0}>
                        Checkout
                    </button>
                </Link>
               
            </div>
        </aside>
    )
}  

export default CheckoutSideMenu