
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: "english",
        name: "english",
        meta:{
          show:true,
          order: 16
        },
        component: () => import( "src/pages/english/index.vue")
      },
      {
        path: "demo",
        name: "demo",
        meta:{
          show:true,
          order: 17
        },
        component: () => import( "src/pages/demo/index.vue")
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
