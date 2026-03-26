import ProductCard from '@/components/ProductCard';
import ViewProductButton from '@/components/ViewProductButton';
import React from 'react'

export default async function page() {

const response = await fetch('https://homework-api.noevchanmakara.site/api/v1/products');
const product = await response.json();
const products  = await product.payload;




  return (
    <div className='flex flex-col'>
      <h1>List of All Product</h1>
      <form action="search">
        <input type="text" placeholder=''/>
      </form>
      <div>
        <ProductCard products = {products}/>
      </div>
    </div>
  )
}
