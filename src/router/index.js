import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import components from './components.js'


Vue.use(Router)

export default new Router({
  routes: [
    {
          path:'/',
          redirect:'/index'
        },
        {
          path:'/index',
          name:'index',
          component:components.index
        },
        {
          path:'/member-center',
          name:'memberCenter',
          component:components.memberCenter
        },
        {
          path:'/add-order',
          name:'addOrder',
          component:components.addOrder
        }
  ]
})
