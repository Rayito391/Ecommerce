import { useContext } from "react";
import { ShoppingContext } from "../../Context";
const Card = (data) =>{
    const context = useContext(ShoppingContext);

    const showProduct = (productDetail) =>{
        context.CloseCheckout()
        context.OpenProductDetail(),
        context.setProductToShow(productDetail)
    }
    const addProduct = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setShoppingCar([...context.ShoppingCar,productData])
        context.CloseProductDetail()
        context.OpenCheckout()
    }
    
    const checkIcon = (id) => {
        const isInCar = context.ShoppingCar.filter(product => product.id === id).length>0
        if (isInCar) {
            return(
                <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
            )
        }else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProduct(event, data.data)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            )
        }
    }
    return(
        <article className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-base m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt="description" />
                {checkIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-sm font-medium'>${data.data.price}</span>
            </p>
        </article>
    )
}


export default Card;