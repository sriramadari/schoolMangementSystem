import React, { useEffect, useState ,useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
import { AuthContext } from '../../service/AuthProvider';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { setIsAuthenticated,setUser,user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token && user){
        if(user.role === 'admin'){
            navigate("/admin")
        }else if(user.role === 'teacher'){
            navigate("/teacher")
        }else if(user.role === 'parent'){
            navigate("/parent")
        } else {
            navigate("/student")
        }
     }
    }, []); 

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password
            });
            if(response && response.status === 200){
                console.log(response);
                setIsAuthenticated(true);
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
                if(response.data.user.role === 'admin'){
                    navigate("/admin")
                }else if(response.data.user.role === 'teacher'){
                    navigate("/teacher")
                }else if(response.data.user.role === 'parent'){
                    navigate("/parent")
                } else {
                    navigate("/student")
                }
            }
         } catch (error) {
            console.log(error);
         }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">Login</Button>
                <Typography>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </Typography>
            </form>
        </Container>
    );
};

export default Login;
