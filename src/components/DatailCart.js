import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../app/services/ProductsService";

function DatailCart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetAllProduct().then((allProductsFromDB) => {
      setProducts(allProductsFromDB);
    });
  }, []);
  return (
    <div className="container">
      <table className="table  text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody className="">
            {products.length > 0
              ? products.map((product, index) => (
                  <tr className="text-white" key={index}>
                    <td className="text-white">{product.id}</td>
                    <td className="text-white">{product.title}</td>
                    <td className="text-white">{product.category}</td>
                    <td className="text-white">{product.price}</td>
                  </tr>
                ))
              : null}

        </tbody>
      </table>
    </div>
  );
}

export default DatailCart;
