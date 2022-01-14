import { useLiveQuery } from 'dexie-react-hooks';
import React, { useState, useEffect } from 'react';
import db from '../../app/services/db/db';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCards() {
    const [productCart, setProductCart ] = useState([]);
    const [TotalPrice, setTotalPrice ] = useState(0);


    const getTotalPrice = () => {
         const total = productCart?.reduce((totalPrice, CurrentProduct) => { 
             return totalPrice + CurrentProduct.price},0)
         setTotalPrice(total)
    }

   useLiveQuery(async () => {
       const productDB = await db.cart.toArray()
       setProductCart(productDB)
    
    })

    useEffect(() => {
        if(productCart.length > 0) {
          getTotalPrice()
        }
      },[productCart])

    return (
        <div>
            <div className="dropdown mr-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuDark" data-bs-toggle="dropdown" aria-expanded="false">
                Carrito
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuDark">
                {productCart?.map((product) => { return <ShoppingCartItem   key={product.id} item={product}/>})}
                <li><hr class="dropdown-divider"/></li>
                <li className='dropdown-item'>Total: ${TotalPrice} </li>         
            </ul>
            </div>
        </div>
    );
}

export default ShoppingCards;