import React from 'react';
import $ from 'jquery';
// this route is for files with skeleton
window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./pages/Dashboard/Default'));
const Header = React.lazy(() => import('./pages/Header'))
const Footer = React.lazy(() => import('./pages/Footer'))
const routes = [
    { path: '/dashboard/', exact: true, name: 'Default', component: Dashboard },
    { path:'/page/header',exact:true,name:'Header',component:Header},
    { path: '/page/footer', exact:true, name:'Footer',component:Footer}
];

export default routes;
