import React from 'react';
import { AppBar, Toolbar, Typography, Button,Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../service/AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const {setUser,setIsAuthenticated,user} = React.useContext(AuthContext);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setUser({});
        setIsAuthenticated(false);
        navigate('/signup');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>School Management System</Typography>
                {user && user.name && <Typography variant="subtitle1" sx={{ color: 'black' }}>Welcome, {user.name}</Typography>}
                <Box sx={{ width: 16 }} /> 
                <Button variant="contained" color="success" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

