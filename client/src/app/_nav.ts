import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Acceuil',
    url: '/dashboard',
    icon: 'icon-speedometer'
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Gestion'
  },
  {
    name: 'Catégories',
    url: '/categories',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Liste des Catégories',
        url: '/categories/list',
        icon: 'icon-list'
      },
      {
        name: 'Nouvelle Catégorie',
        url: '/categories/new',
        icon: 'icon-plus'
      }
    ]
  },
];

