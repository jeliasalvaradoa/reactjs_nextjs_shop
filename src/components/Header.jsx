import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MobileMenu from '@components/MobileMenu';
import styles from '@styles/Header.module.scss';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {

        setToggle(!toggle);

    };

    return (
        <nav className={styles.Nav}>
            <div className={styles.menu}>
            <Image src={menu} alt="menu"  onClick={() => {
                setToggleMobileMenu(!toggleMobileMenu);
                toggleOrders && setToggleOrders(!toggleOrders);
            }} />
            </div>
            <div className={styles['navbar-left']}>
                <div className={styles['nav-logo']}>        
                     <Link href="/">
                    <Image src={logo} alt="logo" />
                 </Link> 
                 </div>

                <ul>
                   
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/clothes">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/furnitures">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/Shoes">Shoes</Link>
                    </li>
                    <li>
                        <Link href="/others">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']}
                    
                    onClick={() => handleToggle()}
                    aria-hidden="true"
                    
                    >josealvarado@example.com</li>      
                    <li className={styles['navbar-shopping-cart']} 
                        
                        onClick={() => {
                        setToggleOrders(!toggleOrders);
                        toggleMobileMenu && setToggleMobileMenu(!toggleMobileMenu);}}
                        aria-hidden="true"
                        >
                        <Image src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
            {toggleMobileMenu && <MobileMenu />}

        </nav>
    );

};
export default Header;