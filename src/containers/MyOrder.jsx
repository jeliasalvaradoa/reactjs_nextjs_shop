import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	// para el testing console.log(state.inicio);
	const sumTotal = () => {
		const reducer = (accumulador, currentValue) => accumulador + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
	return (
		<aside className= {styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={arrow} alt="arrow" />
				<p className={styles['title']}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (
				<OrderItem product = {product} key = {`orderItem-${product.id}`} />
				))}
				<div className={styles['order']}>
					<p>
						<span>Total</span>
					</p>
					<p>${ sumTotal() }</p>
				</div>
				<Link href = "/checkout">
					<button className={styles['primary-button']}>Checkout</button> 
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;