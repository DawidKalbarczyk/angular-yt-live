import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Artists } from './artists/artists';
import { Scenes } from './scenes/scenes';
import { Tickets } from './tickets/tickets';
import { Store } from './store/store';
import { Home } from './home/home';
import { Userinfo } from './userinfo/userinfo';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
            { path: '', component: Dashboard },
            { path: 'artists', component: Artists },
            { path: 'scenes', component: Scenes },
        { path: 'tickets', component: Tickets },
            { path: 'store', component: Store }
        ]
    },
    { path: 'user', component: Userinfo }
];
