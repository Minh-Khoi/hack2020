import React from 'react';
import Home from './Container/Home/Home';
import ReCording from './Container/Recording/Recording';
import Bill from './Container/Bill/Bill';
const routes = [
    {
        path: '/',
        exact : true,
        name: 'About',
        main: () => <Home/>
    },
    {
        path: '/record',
        exact: false,
        name: 'Recording',
        main: () => <ReCording/>
    },
    {
        path: '/bill',
        exact: false,
        name: 'Export Bill',
        main: () => <Bill/>
    }

]

export default routes