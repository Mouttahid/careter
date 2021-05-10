import Image from "next/image";
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import CartDrawer from './cart/CartDrawer';
import {useState} from "react";
import NavDrawer from "./nav/NavDrawer";

export default function Navbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const drawerOnClose = (action) => {
        action(false)
    }

    return (
        <nav className="fixed z-50 top-4 w-full flex justify-center">
            <div className="container bg-white bg-opacity-80 rounded-full flex justify-between py-2 items-center">
                <div>
                    <Link href="/" className="flex items-center">
                        <a><Image src="/images/logo.svg" height="50" width="150"/></a>
                    </Link>
                </div>
                <div className="w-40 flex justify-between">
                    <Link href="/">
                        <SearchIcon className="cursor-pointer text-black hover:text-secondary"/>
                    </Link>
                    <ShoppingBasketIcon onClick={
                            () => setCartOpen(true)
                        }
                        className="cursor-pointer text-black hover:text-secondary"/>

                    <MenuIcon onClick={
                            () => setNavOpen(true)
                        }
                        className="cursor-pointer text-black hover:text-secondary"/>
                    <CartDrawer open={cartOpen}
                        handleClose={
                            () => {
                                drawerOnClose(setCartOpen)
                            }
                        }/>
                    <NavDrawer open={navOpen}
                        handleClose={
                            () => {
                                drawerOnClose(setNavOpen)
                            }
                        }/>
                </div>
        </div>
    </nav>
    )
}
