import { PrinterIcon } from '@heroicons/react/solid';
import React from 'react';
import data from '../utils/data';

const Products = () => {
  return <div className="">
    <h1 className="ml-2 text-3xl p-5 font-semibold hover:underline">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5">
      {
        data.products.map((product)=>(
          <div className="p-2">
            <img className="rounded-md object-cover" src={product.image} alt=""/>
            <div className="text-2xl p-1">{product.name}</div>
            <span className=" block">{`$ ${product.price}`}</span>
            <button className="bg-secondary text-bc flex item-center px-5 py-2 rounded-md mt-3">Add to cart</button>
          </div>
        ))
      }
    </div>
  </div>;
};

export default Products;
