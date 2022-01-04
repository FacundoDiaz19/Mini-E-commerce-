import React, {useState, useEffect} from 'react';

function Alertproduct(props) {
    const [Show, setShow] = useState(false);
    const [Product, setProduct] = useState("");

    useEffect(()=>{
        const lastProduct = sessionStorage.getItem("LastProduct");
        if (lastProduct) {
            setProduct(lastProduct)
            setShow(true)
        }else{
            sessionStorage.removeItem("lastProduct")
        }
    },[])
    if (Show) {
    return (
        <div className='mt-4 pt-2'>
            <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
                  <h4 class="alert-heading">Continua comprando</h4>  
                <p>Aprovecha para comprar el {Product} antes de que se agote</p>.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> setShow()}></button>
            </div>
        </div>
    );
    }
    else{
        return <></>
    }
}

export default Alertproduct;