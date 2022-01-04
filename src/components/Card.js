import React from 'react';
import { saveLastInterestProduct } from '../app/services/StoreServices';
import '../assets/css/styles.css'


function Card({ item }) {
    const {title, description, image, price} = item;
    return (
        <div className="col-md-4 pt-4 ">
            <div className="card cardd border-2">
                <img src={image} className="card-img-top card-img" alt="card-img-top"/>
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <div className='card-text small text-lowercase container-fluid'>
                        <p className="">{description}</p>
                    </div>
                    <div className='row-md-4 gx-2 text-center '>
                        <button type="button" name="price" id="" class="btn btn-info btn-lg mx-2 " onClick={() => saveLastInterestProduct(title)}>Price <small className="text-white bg-secondary rounded p-2">{price}</small></button>
                        <button type="button" name="BTN-carrito" id="" class="btn btn-outline-secondary d-inline-block mx-2">Agregar al carrito</button>
                    </div>
                   
                </div>
            </div>
        </div>
       
    );
}

export default Card;