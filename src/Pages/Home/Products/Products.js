import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('brokenPhone.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <div>
                <h1>Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product =>
                        <ProductsCard
                            key={product._id}
                            product={product}>
                        </ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;