// ProductDetailsModal.js
import React from "react";

const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-lg">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <img src={product.img} alt={product.name} className="w-full h-auto mb-4" />
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discount}% Off</p>
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
