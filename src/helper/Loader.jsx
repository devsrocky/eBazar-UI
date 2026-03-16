import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore';

const Loader = () => {

    const { IsLoader } = ProductStore();
    useEffect(() => {
        if(IsLoader){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [IsLoader]);
    if(!IsLoader) return null;

    return (
        <div className={`screen-blur ${IsLoader === true ? 'loader-active' : ''}`}>
            <div className='full-screeloader'>
                <div className='loader'></div>
            </div>
        </div>
    );
};

export default Loader;