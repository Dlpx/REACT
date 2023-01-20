import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({verContraseña}) {
  return (
    <div>
      <Switch {...label} 
        checked={verContraseña}
      />
    </div>
  );
}