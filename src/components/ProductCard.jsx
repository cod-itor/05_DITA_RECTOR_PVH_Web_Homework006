
import React from 'react'
import Image from "next/image";
import ViewProductButton from './ViewProductButton';

export default function ProductCard() {
  return (
    <div className="max-w-md w-full max-w-md h-[400px]  p-8 flex flex-col overflow-hidden border rounded-2xl  ">
        <div>

        </div>
        {/* <Image
        src="/img/macbookM5.png"
          alt="Macbook Pro M5"
          width={400}
          height={300}
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(236,72,153,0.3)]"
        /> */}
        <div className='flex '>
           <div>
             <p>Flagship series</p>
            <p>Macbook Pro Mac </p>
           </div>
           <div>The price </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quidem rem nesciunt, recusandae ex quo dignissimos totam delectus dolorem ipsum eius unde, incidunt quia quis aliquam. Labore velit saepe omnis.
        </div>
        <ViewProductButton/>

    </div>
  )
}
