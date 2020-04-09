export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/',
                    icon: 'feather icon-user',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Pages',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'UI Pages',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'header',
                            title: 'Header',
                            type: 'item',
                            url: '/page/header'
                        },
                        {
                            id: 'footer',
                            title: 'Footer',
                            type: 'item',
                            url: '/page/footer'
                        },
                        {
                            id: 'home',
                            title: 'Home',
                            type: 'item',
                            url: '/page/home'
                        },
                        {
                            id: 'Howitworks',
                            title: 'How-It-Works',
                            type: 'item',
                            url: '/page/howitworks'
                        },
                        {
                            id: 'join',
                            title: 'Join',
                            type: 'item',
                            url: '/page/join'
                        },
                        {
                            id: 'contact',
                            title: 'Contact',
                            type: 'item',
                            url: '/page/contact'
                        },
                        {
                            id: 'login',
                            title: 'Login',
                            type: 'item',
                            url: '/page/login'
                        }
                    ]
                }
            ]
        },


    ]
}
