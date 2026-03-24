import React from 'react'
import ProductHomepageCardComponent from './ProductHomepageCardComponent';
import CustomerHomepageCardComponent from './CustomerHomepageCardComponent';

export async function Connect() {
    const connect = await fetch('https://homework-api.noevchanmakara.site/api/v1/products');
  const dataUser = await connect.json();
  console.log(dataUser)
  return (
    <div>
        <ProductHomepageCardComponent products = {dataUser.payload} />
        {/* <CustomerHomepageCardComponent/> */}
      
    </div>
  )
}
