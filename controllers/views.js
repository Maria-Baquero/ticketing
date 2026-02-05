

//renderizar vistas
const loginView = (req, res) => res.render('login');
const registerView = (req, res) => res.render('register');
const dashboardView = (req, res) => res.render('dashboard');


module.exports = {
    loginView,
    registerView,
    dashboardView
};
