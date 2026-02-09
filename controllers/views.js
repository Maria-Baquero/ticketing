

//renderizar vistas

//inicio
const loginView = (req, res) => res.render('login');
const registerView = (req, res) => res.render('register');
const dashboardView = (req, res) => res.render('dashboard');


const createView = (req, res) => res.render('users/create');


module.exports = {
    loginView,
    registerView,
    dashboardView,
    createView
};
