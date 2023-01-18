import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../../../CONTEXT/CartContext';

const CartWidget = () => {
    const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `1px solid #E0AF3A`,
        padding: '0 4px',
        color: '#ffffff',
    },
    }));

    const {cantidadCarrito} = useContext(CartContext)

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cantidadCarrito()} style={{fill: "#711f31"}}>
        <ShoppingCartIcon style={{fill: "#E0AF3A"}}/>
      </StyledBadge>
    </IconButton>
  );
}



export default CartWidget;