import React from 'react';
import { saveLastInterestProduct } from '../app/services/StoreServices';
import db from '../app/services/db/db';
import '../assets/css/styles.css'

function Card({ item }) {
    const {title, description, image, price, category} = item;
    const addProductToCart = ({title, price, category }) => {
        db.cart.add({
            title: title,
            price: price,
            category: category
        })
    }
    return (
        <div className="col-md-4 pt-4 ">
            <div className="card cardd border-2">
                <img src={image} className="card-img-top card-img" alt="card-img-top"/>
                <p className='badge bg-info text-dark w-25'>{category}</p>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{title}</h5>
                    </div>

                    <div className='text-card text-card'>
                        <p className=''>{description}</p>
                    </div>
                </div>
                <div className='row-md-4 gx-2 text-center'>
                        <button type="button" name="BTN-carrito" id="" className="btn btn-outline-secondary d-inline-block mx-2" onClick={() => addProductToCart(item)}>Agregar al carrito</button>
                        <button type="button" name="price" id="" className=" badge  boton-price mx-2 " onClick={() => saveLastInterestProduct(title)}>Price <small className="text-white bg-secondary rounded p-2">{price}</small></button>
                    </div>
            </div>
        </div>
       
    );
}

export default Card;