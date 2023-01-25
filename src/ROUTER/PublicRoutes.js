import LoginPage from "../MODULES/LoginPage/LoginPage";
import { Routes, Route } from 'react-router-dom';
import RegisterPage from "../MODULES/RegisterPage/RegisterPage";





const PublicRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={ <LoginPage />} />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/register' element={ <RegisterPage /> } />
            <Route path='*' element={ <LoginPage /> } />
        </Routes> 
    )
}



export default PublicRoutes;