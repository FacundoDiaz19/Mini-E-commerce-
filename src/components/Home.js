import React from 'react';
import json from '../Examples/products.json';
import Card from './Card';
import '../assets/css/styles.css'



function Home() {
    const product = json.products;


    return (
        <>
        <div className=' container px-4 d-flex justify-content-center mt-4'>
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                {product.map((product , index) => (
                    <Card  key={index} item={product}/>
                ))}
            </div>
                
            </div>
        </>
    );
}

export default Home;