import WishStore from "../store/WishStore";

const WishButton = ({onClick, loading, Text}) => {

    const { IsWishSubmit } = WishStore();

    return (
        <button onClick={onClick} className='cart-btn' style={{cursor: IsWishSubmit ? "not-allowed" : "pointer", opacity: IsWishSubmit ? 0.4 : 1}} >
            {
                IsWishSubmit ? <><span className='spinner-border spinner-border-sm text-light' style={{marginRight: '10px'}}></span><span>{loading}</span></> : Text
            }
        </button>
    );
};

export default WishButton;