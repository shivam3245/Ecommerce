import React, { useState } from "react";
import ProductCard from "../layouts/ProductCard";
import ProductDetailsModal from "./ProductDetails";
import product7 from '../assets/img/product7.jpg';
import product8 from '../assets/img/product8.jpg';
import product9 from '../assets/img/product9.jpg';
import product10 from '../assets/img/product10.jpg';
import product11 from '../assets/img/product11.jpg';
import product12 from '../assets/img/product12.jpg';

const ExclusiveProducts = () => {
  const data = [
    { id: 6, img: product7, name: "FrostFire Outerlayers", price: 398.00, discount: 24 },
    { id: 7, img: product8, name: "DaintyDoll Dresses", price: 258.00, discount: 40 },
    { id: 8, img: product9, name: "TrendTraverse Bag", price: 104.00, discount: 35 },
    { id: 9, img: product10, name: "Fitness Footgear", price: 299.00, discount: 40 },
    { id: 10, img: product11, name: "UrbanBelle Hoodies", price: 129.00, discount: 28 },
    { id: 11, img: product12, name: "Elite Handbags", price: 189.00, discount: 30 },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 500]);
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const priceRanges = [
    { label: "Under $100", range: [0, 100] },
    { label: "$100 - $200", range: [100, 200] },
    { label: "$200 - $300", range: [200, 300] },
    { label: "$300 - $400", range: [300, 400] },
    { label: "$400 - $500", range: [400, 500] },
  ];

  const discountRanges = [10, 20, 30, 40, 50];

  const handleFilter = () => {
    const filtered = data.filter(item =>
      item.price >= selectedPriceRange[0] &&
      item.price <= selectedPriceRange[1] &&
      item.discount >= selectedDiscount
    );
    setFilteredData(filtered);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const showAllItems = () => {
    setFilteredData(data);
    setSelectedPriceRange([0, 500]);
    setSelectedDiscount(0);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor pb-5">
        Exclusive Products
      </h1>

      {/* Filter Controls */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 my-2">
        {/* Price Range Tabs */}
        <div className="flex gap-2 mb-2 md:mb-0">
          {priceRanges.map((priceRange, index) => (
            <button
              key={index}
              onClick={() => setSelectedPriceRange(priceRange.range)}
              className={`px-4 py-2 rounded-xl ${selectedPriceRange[0] === priceRange.range[0] && selectedPriceRange[1] === priceRange.range[1] ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {priceRange.label}
            </button>
          ))}
        </div>

        {/* Discount Tabs */}
        <div className="flex gap-2 mb-2 md:mb-0">
          {discountRanges.map((discount, index) => (
            <button
              key={index}
              onClick={() => setSelectedDiscount(discount)}
              className={`px-4 py-2 rounded-xl ${selectedDiscount === discount ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {discount}% Off
            </button>
          ))}
        </div>

        <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 md:mt-0">
          Filter
        </button>

        <button onClick={showAllItems} className="bg-gray-500 text-white px-4 py-2 rounded-xl mt-2 md:mt-0">
          Show All
        </button>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {filteredData.map(item => (
          <div key={item.id} className="md:w-2/4 lg:w-1/4">
            <ProductCard
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price.toFixed(2)}
              discount={`${item.discount}% Off`}
              onClick={() => handleProductClick(item)}
            />
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={closeModal}
      />
    </div>
  );
};

export default ExclusiveProducts;
