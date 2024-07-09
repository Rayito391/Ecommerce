import { useContext } from "react";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import OrdersCards from "../../Components/OrdersCards";
import { ShoppingContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingContext)

    return (
        <Layout>
          <div className='mt-6 flex relative justify-center w-80 items-center'>
            <h1 className='font-medium text-xl mb-4'>My Orders</h1>
          </div>
          {
            context.order.map((order,index)=>(
              <Link key={index} to={`/myorders/${index}`}>
                <OrdersCards
                  totalPrice = {order.totalPrice}
                  totalProducts = {order.totalProducts}/>
              </Link>   
            ))
          }
        </Layout>
    )
  }

export default MyOrders;