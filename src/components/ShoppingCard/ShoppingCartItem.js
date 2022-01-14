import React from "react";
import { Link } from "react-router-dom";

function ShoppingCartItem({ item }) {
  return (
    <div>
      <li className="dropdown-item">
          <Link to={`/product/${item.id}`}>
            {item.title} - {item.category} - ${item.price}{""}
          </Link>
      </li>
    </div>
  );
}

export default ShoppingCartItem;
