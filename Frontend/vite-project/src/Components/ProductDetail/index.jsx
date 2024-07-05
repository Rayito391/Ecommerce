import './style.css'
import { ShoppingContext } from "../../Context";
import { useContext } from 'react';
const ProductDetail = () =>{
    const context = useContext(ShoppingContext)

    return(
        <aside className={`${context.isOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.CloseProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                    </svg>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                    src={context.ProductToShow.images?.[0]} 
                    alt="Description" />
            </figure>
            <p className='flex flex-col p-6 text-justify'>
                <span className='font-medium text-2xl mb-2'>${context.ProductToShow.price}</span>
                <span className='font-medium text-md'>{context.ProductToShow.title}</span>
                <span className='font-light text-sm'>{context.ProductToShow.description}</span>
            </p>
        </aside>
    )
}  

export default ProductDetail