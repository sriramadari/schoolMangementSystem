// utils/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.name === 'NotFoundError') {
        return res.status(404).json({ message: 'Resource Not Found' });
    }

    if (err.name === 'UserNotFoundError') {
        return res.status(404).json({ message: 'User Not Found' });
    }

    res.status(500).json({ message: 'Internal Server Error' });
};
