import UserStore from "../store/UserStore";

const SubmitBtn = ({ onClick, Text }) => {

  const { isSubmiting } = UserStore();
  
  return (
    <button className="login-btn" onClick={onClick} disabled={isSubmiting}
      style={{ cursor: isSubmiting ? "not-allowed" : "pointer", opacity: isSubmiting ? 0.4 : 1 }} >
      {isSubmiting ?  <><span className="spinner-border spinner-border-sm text-light" style={{marginRight: '8px'}}></span> proccessing...</> : Text}
    </button>
  );
};

export default SubmitBtn;