import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/etablissement',
    title: 'Etablissement',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/livre-compte/categorie',
    title: 'Livre comptable',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/etablissement/create',
    title: 'Créer un compte',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/component/dropdown',
  //   title: 'Dropdown',
  //   icon: 'mdi mdi-calendar-clock',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/modal',
  //   title: 'Modal',
  //   icon: 'mdi mdi-tablet',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'mdi mdi-backburger',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/poptool',
  //   title: 'Popover & Tooltip',
  //   icon: 'mdi mdi-image-filter-vintage',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/progressbar',
  //   title: 'Progressbar',
  //   icon: 'mdi mdi-poll',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/rating',
  //   title: 'Ratings',
  //   icon: 'mdi mdi-bandcamp',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/tabs',
  //   title: 'Tabs',
  //   icon: 'mdi mdi-sort-variant',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/timepicker',
  //   title: 'Timepicker',
  //   icon: 'mdi mdi-calendar-clock',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/toast',
  //   title: 'Toast',
  //   icon: 'mdi mdi-alert',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // }
];
