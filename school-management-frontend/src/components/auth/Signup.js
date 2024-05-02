import React, { useEffect, useState,useContext } from 'react';
import { TextField, Button, Typography, Container,Select, MenuItem,InputLabel } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../service/AuthProvider';
import axios from 'axios';

const Signup = ({ userType }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const { setIsAuthenticated ,setUser,user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setRole(event.target.value);
    };

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
        const response = await axios.post('http://localhost:8080/api/auth/signup', {
            name,
            email,
            password,
            role
        });
        if(response && response.status === 201){
            console.log(response);
            setIsAuthenticated(true);
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
            setUser(response.data.user);
            if(role === 'admin'){
                navigate("/admin")
            }else if(role === 'teacher'){
                navigate("/teacher")
            }else if(role === 'parent'){
                navigate("/parent")
            }else{
              navigate("/student")
            }
        }
     } catch (error) {
        console.log(error);
     }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Sign Up</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <Select value={role} onChange={handleChange} id="role" label="role"> 
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                    <MenuItem value="admin">Administrator</MenuItem>
                    <MenuItem value="parent">Parent</MenuItem>
                </Select>
                <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                <Typography>
                    Already have an account? <Link to="/">Login</Link>
                </Typography>
            </form>
        </Container>
    );
};

export default Signup;
