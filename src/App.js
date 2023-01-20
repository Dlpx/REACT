import './App.css';
import { CartProvider } from './CONTEXT/CartContext/CartContext';
import { LoginProvider } from './CONTEXT/LoginContext/LoginContext';
import AppRouter from './ROUTER/AppRouter';

function App() {
  


  return (
    <LoginProvider>

      <CartProvider>

        <AppRouter /> 

      </CartProvider>
      
    </LoginProvider>
  );
}

export default App;
