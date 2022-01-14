import React, { useEffect, useState } from 'react';
import { GetProductByID } from '../app/services/ProductsService';
import Navbar from '../components/Navbar';

function ProductView({ match }) {

    const [ProductDetail, setProductDetail]= useState(null);

    useEffect(() => {
        const { params } = match;
       GetProductByID(params.id)
       .then((productFromDB)=>{
            setProductDetail(productFromDB)
       })
       .catch((err)=>{
        console.log(err)
       })
    },[match]);

    console.log(ProductDetail)

    return (
        <>
        <Navbar />
        <div className='mt-5'>
            <h1>
                {ProductDetail ? ProductDetail && JSON.stringify(ProductDetail) : null}
            </h1>
        </div>
        </>
    );
}

export default ProductView;