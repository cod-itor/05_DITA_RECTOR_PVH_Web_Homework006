import React from 'react'
import {  ArrowUpRight } from 'lucide-react';

export default function ViewProductButton() {
  return (
    <div>
        <button className='w-full rounded-xl bg-black text-white hover:cursor-pointer  h-10 border border-solid-1 flex justify-center items-center'>View Product<ArrowUpRight /></button>
    </div>
  )
}
