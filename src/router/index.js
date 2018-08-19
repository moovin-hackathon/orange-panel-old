import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/template/Layout';
import Start from '@/views/question/Start';
import Personalize from '@/views/question/Personalize';
import Quiz from '@/views/question/Quiz';
import FinishQuiz from '@/views/question/FinishQuiz';
import Home from '@/views/question/Home';
import Register from '@/views/connect/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'register',
          component: Register,
        },
        {
          path: 'start',
          name: 'start',
          component: Start,
        },
        {
          path: 'personalize',
          name: 'personalize',
          component: Personalize,
        },
        {
          path: 'quiz',
          name: 'quiz',
          component: Quiz,
        },
        {
          path: 'finishQuiz',
          name: 'finishQuiz',
          component: FinishQuiz,
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
        }
      ]
    },
  ],
});
