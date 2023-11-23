import ProductList from '@containers/ProductList';
import Head from 'next/head';
export default function Home({categoryId}) {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList categoryId />
    </>
  );
}
