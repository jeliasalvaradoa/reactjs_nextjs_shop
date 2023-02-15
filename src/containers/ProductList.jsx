import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';


const obtenerApi = (id) => {
	//const API = 'https://api.escuelajs.co/api/v1/products';
	//const API2 = 'https://api.escuelajs.co/api/v1/categories/2/products';
	const API = id == 0 ? `https://api.escuelajs.co/api/v1/products` : `https://api.escuelajs.co/api/v1/categories/${id}/products`;
	return API;
};

const ProductList = ({ idCategory = 0 }) => {
  console.log(idCategory);
	const API_URL = obtenerApi(idCategory);
	
	const products = useGetProducts(API_URL);

	return (
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{products.map(product => (
						
                 <ProductItem product={product} key={product.id} />

				)
				)};


			</div>
		</section>
	);
};

export default ProductList;