import React from 'react';
import DatailCart from '../components/DatailCart';
import Navbar from '../components/Navbar';

function PurchaseView({ history }) {

    const HandleCancelButtom = () => {
        history.push('/')
    }
    
    return (
        <>
        <Navbar />
        <div className='mt-5' >
            <h1 className='text-white'>pagina del carrito</h1>
            <DatailCart />
            <div className='row gx-0 text-center'>
                <div className='col-6'>
                    <button className='btn btn-danger' onClick={HandleCancelButtom}>Cancelar</button>
                </div>
                <div className='col-6'>
                    <button className='btn btn-success'>Comprar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default PurchaseView;