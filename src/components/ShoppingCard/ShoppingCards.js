import React from 'react';

function ShoppingCards(props) {
    return (
        <div>
            <div class="dropdown mr-4">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuDark" data-bs-toggle="dropdown" aria-expanded="false">
                Carrito
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuDark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
        </div>
    );
}

export default ShoppingCards;