import React, { useContext } from 'react';
import Image from 'next/image';
//import myImagen from '@logos/h2c.png'; //esto es una imagen de prueba que agregue para poder identificar un error de las imagenes de l api
import AppContext from '@context/AppContext';
import btAddToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';


const ProductItem = ({product}) => {
	
const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
		//para el testing console.log(item);
	};
	return (
		<div className={styles.ProductItem}>
			
			<Image src= {product?.images[0]} width={240} height={240} alt={product?.title} />
			<div className={styles['product-info']}>
				<div>
					<p>${product?.price}</p>
					<p>{product?.title}</p>
				</div>
				<figure 
				
				onClick={() => handleClick(product) }
				aria-hidden="true"
				>
					<Image src={btAddToCart} alt="" />
				</figure>
				
			</div>
		</div>
	);
};

export default ProductItem;