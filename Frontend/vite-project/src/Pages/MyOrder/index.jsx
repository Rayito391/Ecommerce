import { useContext } from 'react';
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import { ShoppingContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
    const context = useContext(ShoppingContext)
    const currentPath = window.location.pathname
    let indexPath = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (indexPath === 'last') indexPath = context.order?.length-1 

    return (
        <Layout>
            <div className='mt-6 mb-6 flex relative justify-center w-80 items-center'>
                <Link to='/myorders'  className='absolute left-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                </Link>
                <h1 className='font-medium text-xl mb-4'>My Order</h1>
            </div>
          
          <div className='flex flex-col w-80'>
                {
                    context.order?.[indexPath]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id = {product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
  }

export default MyOrder;