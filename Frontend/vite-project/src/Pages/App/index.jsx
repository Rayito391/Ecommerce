// Primero React>Pages>Components>CSS
// React
import { useRoutes, BrowserRouter } from "react-router-dom"; 

// Pages
import Home from '../Home/';
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

//Components
import Navbar from "../../Components/Navbar";

//CSS
import './App.css';




const AppRoutes = ()=>{
  let routes = useRoutes([
    {path:'/', element:<Home/> }, //Estructura para optimizar codigo
    {path:'/myaccount', element:<MyAccount/> },
    {path:'/myorders', element:<MyOrders/> },
    {path:'/*', element:<NotFound/> },
    {path:'/signin', element:<SignIn/> }
  ])
  return routes;
}

const App = () => {
  return (
      <BrowserRouter>
          <AppRoutes></AppRoutes>
          <Navbar></Navbar>
      </BrowserRouter>
  )
}
export default App
