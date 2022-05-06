import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    
    if(sessionStorage.getItem("react-ecommerce-token") != null) {
        return <Outlet />
    }else {
        return <Navigate to="/" />
    }
};

export default ProtectedRoutes;