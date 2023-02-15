import React from 'react';
import ProductList from '@containers/ProductList';

const Home = ({ categoryId }) => {
	return (
		<>
			<ProductList idCategory = { categoryId }/>
		</>
	);
};

export default Home;
