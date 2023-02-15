import React from 'react';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';


const MobileMenu = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href="#">CATEGORIES</Link>
        </li>
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
          <Link href="/shoes">Shoes</Link>
        </li>
        <li>
          <Link href="/others">Others</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/orders">My orders</Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#" className={styles['email']}>josealvarado@example.com</Link>
        </li>
        <li>
          <Link href="#" className={styles['sign-out']}>Sign out</Link>
        </li>
      </ul>
    </div>


  );
};

export default MobileMenu;