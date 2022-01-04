import React from 'react';

function ShoppingCartItem({item}) {
    return (
        <div>
            <li className='dropdown-item'>{item.title} - {item.category} - ${item.price}</li>
        </div>
    );
}

export default ShoppingCartItem;



