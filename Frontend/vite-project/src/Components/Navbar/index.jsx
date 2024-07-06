import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../../Context";


const Navbar = () =>{
    const context = useContext(ShoppingContext);
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-lg font-light shadow-md">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-2xl">
                    <NavLink to={'/'}>
                        <img src="data:image/png;base64,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" alt="rayo" className='w-16 h-16' />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/'
                        className =  {({  isActive })  =>
                            isActive  ?  activeStyle :  undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/clothes'}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/electronics'}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/furnitures'}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/toys'}
                        className={({ isActive }) =>
                              isActive ? activeStyle : undefined
                          }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/others'}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    ryangpe153@gmail.com
                </li>
                <li>
                    <NavLink to={'/myorders'}>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/myAccount'}>
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/signin'}>
                        Sign In
                    </NavLink>
                </li>
                <li className='cursor-pointer'>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='relative float-start mr-1 w-6'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;