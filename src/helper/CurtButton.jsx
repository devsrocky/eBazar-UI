import React from 'react';
import CartStore from '../store/CartStore';

const CurtButton = ({onClick, loading, Text}) => {

    const {IsCurtSubmit} = CartStore();

    return (
        <button onClick={onClick} className='cart-btn' style={{cursor: IsCurtSubmit ? "not-allowed" : "pointer", opacity: IsCurtSubmit ? 0.4 : 1}} >
            {
                IsCurtSubmit ? <><span className='spinner-border spinner-border-sm text-light' style={{marginRight: '10px'}}></span><span>{loading}</span></> : Text
            }
        </button>
    );
};

export default CurtButton;