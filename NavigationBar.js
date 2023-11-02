import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Logo</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
        {/* Add more menu items as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
