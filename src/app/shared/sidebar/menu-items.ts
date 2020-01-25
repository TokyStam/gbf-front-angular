import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: '/etablissement',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'mdi mdi-gauge',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  {
    path: '/etablissement/recette/recette-annuel',
    title: 'Recette',
    icon: 'mdi mdi-download',
    class: '',
    extralink: false,
    submenu: [],
    admin: true
  },
  {
    path: '/etablissement',
    title: 'Budget prévisionnel',
    icon: 'mdi mdi-currency-eur',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/livre-compte/categorie',
    title: 'Livre comptable',
    icon: 'mdi mdi-book-open-page-variant',
    class: '',
    extralink: false,
    submenu: [],
    admin: true
  },
  {
    path: '/recap-depense/detail-depense',
    title: 'Récapitulation dépense',
    icon: 'mdi mdi-tablet',
    class: '',
    extralink: false,
    submenu: [],
    admin: true
  },
  {
    path: '/tableau-equilibre/fonctionnement/detail-fct',
    title: 'Tableau d\'équilibre',
    icon: 'mdi mdi-image-filter-vintage',
    class: '',
    extralink: false,
    submenu: [],
    admin: true
  },
  {
    path: '/etablissement/create',
    title: 'Créer un compte',
    icon: 'mdi mdi-account-plus',
    class: '',
    extralink: false,
    submenu: [],
    admin: true
  },

  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'mdi mdi-backburger',
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
