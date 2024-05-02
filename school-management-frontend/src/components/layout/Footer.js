import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2024 School Management System. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
