import React from 'react'

// this file is for pages without skeleton

const Login = React.lazy(() => import('./pages/Login'))
const Registration = React.lazy(() => import('./pages/Registration'))

const route = [

    { path: '/login', exact:true, name:'Login',component:Login},
    { path: '/registration', exact:true, name:'Registration',component:Registration}
];

export default route;
