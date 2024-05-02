// App.js
import React ,{useContext} from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate,Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ParentDashboard from './pages/ParentDashboard';
import { AuthProvider,AuthContext } from './service/AuthProvider';

const ProtectedRoute = () => {
    const {isAuthenticated,user}=useContext(AuthContext);
    if (!isAuthenticated && !user) return <Navigate to="/" />;
    return <Outlet />;
  };

const App = () => {
    return (
          <AuthProvider>
             <Navbar/>
             <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/student" element={<StudentDashboard />} />
                    <Route path="/teacher" element={<TeacherDashboard />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/parent" element={<ParentDashboard />} />
                </Route>
             </Routes>
            </AuthProvider>
         )
};

export default App;
