import { RouteInfo } from './sidebar.metadata';
import { Title } from '@angular/platform-browser';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: '',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Accueil',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Statistiques',
    icon: 'mdi mdi-poll',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [  {
      path: '/component/progressbar',
      title: 'region',
      icon: '',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/tabs',
      title: 'recruiter',
      icon: '',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: []
    }
    

    ]
  },
  {
    path: '/component/rating',
    title: 'Par Region',
    icon: '',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/tabs',
    title: 'Par Recruteur',
    icon: '',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/progressbar',
    title: 'Par Title ',
    icon: '',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }
];
