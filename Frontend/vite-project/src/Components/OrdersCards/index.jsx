const OrdersCards = props => {
    const {totalPrice, totalProducts} = props
   
    return(
        <div className='flex justify-between items-center mb-3 border border-black'>
           <p>
                <span>05.07.24</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
           </p>
        </div>
    )
}
export default OrdersCards