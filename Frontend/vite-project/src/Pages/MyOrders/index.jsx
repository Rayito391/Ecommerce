import { useContext } from "react";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import OrdersCards from "../../Components/OrdersCards";
import { ShoppingContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingContext)

    return (
        <Layout>
          MyOrders
          {
            context.order.map((order)=>{
              <Link key={index} to={`/myorders/${order.id}`}>
                <OrdersCards
                  totalPrice = {order.totalPrice}
                  totalProducts = {order.totalProducts}/>
              </Link>   
            })
          }
        </Layout>
    )
  }

export default MyOrders;