import React from "react";
import ProductCard from "../layouts/ProductCard";
import product13 from '../assets/img/product13.jpg';
import product14 from '../assets/img/product14.jpg';
import product15 from '../assets/img/product15.jpg';


const NewArrivals = () => {
  const data = [
    {
      id: 12,
      img: product13,
      name: "Canvas Sneakers",
      price: "999.00",
      discount: "28% Off",
    },
    {
      id: 13,
      img: product14,
      name: "shirt combo pack",
      price: "699.00",
      discount: "40% Off",
    },
    {
      id: 14,
      img: product15,
      name: "Hublot watch",
      price: "698.00",
      discount: "26% Off",
    },
  ];

  return (
    <div className=" min-h-[80vh] flex flex-col justify-center bg-slate-300 px-5 pt-20">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>

      {/* Cards section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
