import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Acceuil",
    url: "/dashboard",
    icon: "icon-speedometer",
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: "Gestion",
  },
  {
    name: "Catégories",
    url: "/categories",
    icon: "icon-puzzle",
    children: [
      {
        name: "Liste des Catégories",
        url: "/categories/list",
        icon: "icon-list",
      },
      {
        name: "Nouvelle Catégorie",
        url: "/categories/new",
        icon: "icon-plus",
      },
    ],
  },
  {
    name: "Cours",
    url: "/courses",
    icon: "icon-bulb",
    children: [
      {
        name: "Liste des Cours",
        url: "/courses/list",
        icon: "icon-list",
      },
      {
        name: "Nouveau Cours",
        url: "/courses/new",
        icon: "icon-plus",
      },
    ],
  },
  {
    name: "Chapitres",
    url: "/chapters",
    icon: "icon-film",
    children: [
      {
        name: "Liste des Chapitres",
        url: "/chapters/list",
        icon: "icon-list",
      },
      {
        name: "Nouveau Chapitre",
        url: "/chapters/new",
        icon: "icon-plus",
      },
    ],
  },
  {
    name: "Utilisateurs",
    url: "/users",
    icon: "icon-user",
    children: [
      {
        name: "Liste des Utilisateurs",
        url: "/users/list",
        icon: "icon-list",
      }
    ],
  }
];
