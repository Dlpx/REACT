import { BrowserRouter} from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../CONTEXT/LoginContext/LoginContext';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';



const AppRouter = () => {


  const {usuario} = useContext(LoginContext)
    return(
        <BrowserRouter>

          {usuario.logged 
            ? <PrivateRoutes/> 
            : <PublicRoutes />}
          
        </BrowserRouter>
    )
}



export default AppRouter;