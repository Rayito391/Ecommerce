import './style.css'
import { ShoppingContext } from "../../Context";
import { useContext } from 'react';
const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingContext)
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
        </aside>
    )
}  

export default CheckoutSideMenu