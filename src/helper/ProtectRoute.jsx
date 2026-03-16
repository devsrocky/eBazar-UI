import UserStore from '../store/UserStore';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {

    const { iaLogin } = UserStore();
    const Auth = iaLogin();
    if(!Auth.auth){
        return <Navigate to="/login" replace/>
    }
    return children;
};

export default ProtectRoute;