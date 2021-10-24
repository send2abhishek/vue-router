import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserLists from './components/users/UsersList.vue';
import TeamMemeber from './components/teams/TeamMembers.vue';

const app = createApp(App);

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      path: '/teams',
      component: TeamsList
    },
    {
      path: '/teams/:teamId',
      component: TeamMemeber,
      props: true
    },
    {
      path: '/users',
      component: UserLists
    }
  ],
  history: createWebHistory(),
  linkActiveClass: 'active'
});
app.use(router);
app.mount('#app');
