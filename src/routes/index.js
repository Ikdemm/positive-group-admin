const express = require('express');

const docsRoutes = require('./docs.routes');
const categoriesRoutes = require('./categories.routes');
const chaptersRoutes = require('./chapters.routes');
const coursesRoutes = require('./courses.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const requestsRoutes = require('./requests.routes');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: usersRoutes
    },
    {
        path: '/courses',
        route: coursesRoutes
    },
    {
        path: '/chapters',
        route: chaptersRoutes
    },
    {
        path: '/categories',
        route: categoriesRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/requests',
        route: requestsRoutes
    }
]

const devRoutes = [
    // routes available only in development mode
    {
        path: '/api-docs',
        route: docsRoutes,
    }
]

// Applying default routes
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

// Applying development routes
devRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;