/*
 * @Date           : 2021-11-24 23:47:50
 * @FilePath       : /learning-space/src/router/routes.js
 * @Description    : 
 */

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      // {//英语
      //   path: "english",
      //   name: "english",
      //   meta:{
      //     show:true,
      //     order: 16
      //   },
      //   component: () => import( "src/pages/english/index.vue")
      // },
      // {
      //   path: "demo",
      //   name: "demo",
      //   meta:{
      //     show:true,
      //     order: 17
      //   },
      //   component: () => import( "src/pages/demo/index.vue")
      // },
      {
        path: "html",
        name: "阶段一",
        meta:{
          show:true,
          order: 17
        },
        component: () => import( "src/pages/html/index.vue")
      },
      
      {
        path: "web",
        name: "阶段二",
        meta:{
          show:true,
          order: 17
        },
        component: () => import( "src/pages/web/index.vue")
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/layouts/MainLayout.vue')
  }
]

export default routes
