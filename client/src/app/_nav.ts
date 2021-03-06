import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Acceuil",
    url: "/dashboard",
    icon: "icon-speedometer"
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
  },
  {
    name: "Requêtes",
    url: "/requests",
    icon: "icon-question",
    children: [
      {
        name: "Requêtes d'activation",
        url: "/requests/activation-requests",
        icon: "icon-list",
      },
      {
        name: "Requêtes de cours",
        url: "/requests/courses-requests",
        icon: "icon-list",
      }
    ],
  },
  {
    name: "Codes",
    url: "/codes",
    icon: "icon-menu",
    children: [
      {
        name: "Codes d'activation",
        url: "/codes/activation-codes",
        icon: "icon-lock",
      },
      {
        name: "Codes de cours",
        url: "/codes/courses-codes",
        icon: "icon-film",
      },
      {
        name: "Codes de crédit",
        url: "/codes/credit-codes",
        icon: "icon-wallet",
      },
      {
        name: "Nouveau code",
        url: "/codes/add-code",
        icon: "icon-plus",
      }
    ],
  }
];
