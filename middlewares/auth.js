module.exports = (req, res, next) => {
    req.user = {
        id: 123456,
        name: 'Tanin Rahman',
        role: 'admin',
    }
    next();
}