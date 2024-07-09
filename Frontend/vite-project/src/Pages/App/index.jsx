// Primero React>Pages>Components>CSS
// React
import { useRoutes, BrowserRouter } from "react-router-dom"; 

// Pages
import { ShoppingProvider } from "../../Context";
import Home from '../Home/';
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

//Components
import Navbar from "../../Components/Navbar";

//CSS
import './App.css';




const AppRoutes = ()=>{
  let routes = useRoutes([
    {path:'/', element:<Home/> }, //Estructura para optimizar codigo
    {path:'/myaccount', element:<MyAccount/> },
    {path:'/myorder', element:<MyOrder/> },
    {path:'/myorders', element:<MyOrders/> },
    {path:'/myorders/last', element:<MyOrder/> },
    {path:'/myorders/:id', element:<MyOrder/> },
    {path:'/*', element:<NotFound/> },
    {path:'/signin', element:<SignIn/> }
  ])
  return routes;
}

const App = () => {
  return (
      <ShoppingProvider>
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
            <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingProvider>
  )
}
export default App
