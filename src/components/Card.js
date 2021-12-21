import React from 'react';
import '../assets/css/styles.css'


function Card({ item }) {
    const {title, description, image, price} = item;
    return (
        <div className="col-md-4 p-2">
            <div className="card cardd">
                <img src={image} className="card-img-top card-img" alt="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text small text-card">{description}</p>
                    <p className="card-text pt-5 "><small className="text-muted"> Price {price}</small></p>
                </div>
            </div>
        </div>
       
    );
}

export default Card;