import { useContext } from 'react';

import Layout from "../../Components/Layout";
import { ShoppingContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
    const context = useContext(ShoppingContext)
    return (
        <Layout>
          MyOrder
          <div className='flex flex-col w-80'>
                {
                    context.order && context.order.length > 0 ?
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard
                            key={product.id}
                            id = {product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                        />
                    ))  : <p>No hay productos en la orden.</p>
                }
            </div>
        </Layout>
    )
  }

export default MyOrder;