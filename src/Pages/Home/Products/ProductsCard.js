import React from 'react';

const ProductsCard = ({product}) => {
    const { image, name, originalPrice, resalePrice, usedTime ,location}= product;
    return (
        <div className=" shadow-xl mb-2">
            <figure className="px-2 pt-10">
                <img src={image} alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Original price: <small className='font-bold text-green-500'>$ {originalPrice}</small></p>
                <p>Resale price: <small className='font-bold text-green-500'>$ {resalePrice}</small></p>
                <p>{usedTime}</p>
                <p>{location}</p>
                <div className="card-actions">
                    <button className="btn btn-success text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;