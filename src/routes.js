import React from 'react';
import $ from 'jquery';
// this route is for files with skeleton
window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./pages/Dashboard/Default'));


const routes = [
    { path: '/dashboard/', exact: true, name: 'Default', component: Dashboard },
];

export default routes;
