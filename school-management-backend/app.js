const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors(
    {
        origin:"*"
    }
));
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const academicRoutes = require('./routes/academicRoutes');
const gradingRoutes = require('./routes/gradingRoutes');
const staffRoutes = require('./routes/staffRoutes');
const feeRoutes = require('./routes/feeRoutes');
const errorHandler = require('./utils/errorHandler');

app.use(errorHandler);
app.use('/api/auth', authRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.use('/api/academic', academicRoutes);
app.use('/api/grading', gradingRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/fee', feeRoutes);

module.exports = app;
