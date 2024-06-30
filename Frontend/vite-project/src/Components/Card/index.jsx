const Card = () =>{
    return(
        <article className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className='relative mb-3 w-full h-4/5'>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-base m-2 px-3 py-0.5">Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src="https://cnnespanol.cnn.com/wp-content/uploads/2021/08/logitech-audifonos-gaming.png" alt="" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>HeadPhones</span>
                <span className='text-sm font-medium'>$300</span>
            </p>
        </article>
    )
}


export default Card;