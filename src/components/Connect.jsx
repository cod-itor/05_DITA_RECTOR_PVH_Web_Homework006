import React from 'react'
import ProductHomepageCardComponent from './ProductHomepageCardComponent';
import CustomerHomepageCardComponent from './CustomerHomepageCardComponent';
import { productService } from '@/service/ProductService';

export async function Connect() {
  const products = await productService.getAllProducts();
  return (
    <div>
        <ProductHomepageCardComponent products = {products} />
        {/* <CustomerHomepageCardComponent/> */}
      
    </div>
  )
}
