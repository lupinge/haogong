require('./index.scss');
var util = require('../common/widget/util');
//const Vue = require('vue');
//import VueRouter from 'vue-router';
Vue.use(VueRouter);

const navBar = Vue.component('nav-bar', require('../components/nav-bar/nav-bar'));
const home = Vue.component('home', require('../components/home/home'));
const init = Vue.component('init', require('../components/user/init/init'));
const login = Vue.component('login', require('../components/user/login/login'));
const register = Vue.component('register', require('../components/user/register/register'));
const forget = Vue.component('forget', require('../components/user/forget/forget'));
const addInformation = Vue.component('add-information', require('../components/user/add-information/add-information'));
const addExperience = Vue.component('add-experience', require('../components/user/add-experience/add-experience'));

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Init'
        }
    },
    {
        name: 'Home',
        path: '/home',
        component: home
    },
    {
        name: 'Init',
        path: '/init',
        component: init
    },
    {
        name: 'Login',
        path: '/login',
        component: login
    },
    {
        name: 'Register',
        path: '/register',
        component: register
    },
    {
        name: 'Forget',
        path: '/forget',
        component: forget
    },
    {
        name: 'AddInformation',
        path: '/addInformation',
        component: addInformation
    },
    {
        name: 'AddExperience',
        path: '/addExperience',
        component: addExperience
    }
];

const router = new VueRouter({
    routes: routes
});

router.afterEach(router => {
    //document.title = router.name;
    $('html, body').animate({scrollTop:0}, 10);
    window.console.log(router);

    $('html').removeClass().addClass('page-'+router.name.toLowerCase());
    if(app){
        app.onloadNavConfig(router.path);
    }
});

const app = new Vue({
    el:'#app',
    data:{
        navBarDisplay: true,
        navBarConfig: {
            title: '好工',
            menuBool: false,
            returnBool: true,
            skipBool: false
        }
    },
    methods: {
        initPage: function () {
            this.onloadNavConfig(window.location.href);
        },
        updateNavConfig: function(tit, mb, rb, sb, db){
            this.navBarConfig = {
                title: tit,
                menuBool: mb,
                returnBool: rb,
                skipBool: sb
            };
            this.navBarDisplay = db;
        },
        onloadNavConfig: function(routerPath){
            if(routerPath.indexOf('/init') > -1){
                this.navBarDisplay = false;
                return;
            }
            if(routerPath.indexOf('/login') > -1){
                this.updateNavConfig('登录', false, true, false, true);
                return;
            }
            if(routerPath.indexOf('/register') > -1){
                this.updateNavConfig('注册', false, true, false, true);
                return;
            }
            if(routerPath.indexOf('/forget') > -1){
                this.updateNavConfig('忘记密码', false, true, false, true);
                return;
            }
            if(routerPath.indexOf('/home') > -1){
                this.updateNavConfig('好工', true, false, false, true);
                return;
            }
            if(routerPath.indexOf('/addInformation') > -1){
                this.updateNavConfig('完善信息', false, true, false, true);
                return;
            }
            if(routerPath.indexOf('/addExperience') > -1){
                this.updateNavConfig('添加项目经历', false, true, true, true);
                return;
            }
        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
        this.initPage();
    },
    router: router
});