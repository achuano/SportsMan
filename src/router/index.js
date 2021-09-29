import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
// import record from '@/components/comment/Record'
import Post from '@/components/Post'
import sign from '@/components/Sign'
import comments from '@/components/comment/comments'
import login from '@/components/Login'
import register from '@/components/register'
import Square from '@/components/Square'
import Condition from '@/components/Condition';
import Chat from '@/components/Chat';


Vue.use(Router);

const router = new Router({
  routes: [
    { path: '', redirect: '/login' },
    { path: '/register', component: register },
    { path: '/login', component: login, },
    {
      path: '/home', component: home,
      children: [{ path: '', component: sign }]
    },
    { path: '/square', component: Square },
    { path: '/condition', component: Condition },
    { path: '/post', component: Post },
    {
      path: '/chat', component: Chat,
      children: [
        { path: '/', component: comments }
      ]
    }
  ]
})


// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {

  if (to.path === '/login' || to.path === '/register') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === '' || token === null) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;
