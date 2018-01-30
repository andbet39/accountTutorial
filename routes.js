/**
 * Created by andreaterzani on 30/05/15.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/register', function () {
    this.render('register');
});

Router.route('/login', function () {
    this.render('login');
});

Router.route('/', function () {
    this.render('home');
});


