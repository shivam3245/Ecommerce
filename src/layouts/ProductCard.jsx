import React from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ id, img, name, price, discount, onClick }) => {
  // redux logic
  const dispatch = useAppDispatch();

  const addProductToCart = (event) => {
    event.stopPropagation();
    const payload = {
      id,
      img,
      name,
      price: parseFloat(price),
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Added to Cart successfully");
  };

  return (
    <div
      className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-20 cursor-pointer"
      onClick={onClick} // Add onClick handler for the product details modal
      key={id}
    >
      <div>
        <img
          src={img}
          alt="img"
          className="h-56 2xl:h-64 rounded-t-xl w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-xl pt-4">{name}</h1>
        <div className="flex gap-10 pt-2">
          <h2 className="font-medium text-lg">${price}</h2>
          <h2 className="font-medium text-DarkColor">{discount}</h2>
        </div>

        <div className="flex gap-8 pt-4">
          <button
            className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800"
            onClick={addProductToCart}
          >
            Add to Cart
          </button>
          <div className="flex gap-1 items-center">
            <h2>5.0</h2>
            <FaStar className="text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
