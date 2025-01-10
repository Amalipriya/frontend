import React from "react";
import {Product } from "category_info.tsx";

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product)=> void;
}
const ProductCard: React.FC<ProductCardProps>=({ product, addToCart})=>{
    return(
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

