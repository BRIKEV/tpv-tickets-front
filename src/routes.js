import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/views/Admin';
import Login from '@/views/Login';

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/',
      name: 'admin',
      component: Admin,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!undefined;

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      // query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/');
  }

  next();
})

export default router;
