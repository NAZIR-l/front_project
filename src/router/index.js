import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/Vehicle',
    name: 'Vehicle',
    component: () => import('../views/Vehicle_Home.vue')  
  },
  {
    path: '/center/Home',
    name: 'home_center',
    component: () => import('../views/Center_Home')  
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calendar_shipment',
    name: 'calendar_shipment',
    component: () => import('../components/calendar/calendar_shipment')  },
  {
    path: '/login_client',
    name: 'about',
    component: () => import('../components/registeraiton/login.vue')
  },
  {
    path: '/login_Driver',
    name: 'login_Driver',
    component: () => import('../components/ManageVehicle/Login_Driver.vue')
  },
  {
    path: '/login_Client_Ship',
    name: 'login_Driver',
    component: () => import('../components/ManageVehicle/Login_Driver.vue')
  },
  {
    path: '/signUp_client',
    name: 'signUp',
    component: () => import('../components/registeraiton/signUp.vue')
  }
  ,
  {
    path: '/client-table',
    name: 'client_table',
    component: () => import('../components/tables/client_table.vue')
  }
  ,
  {
    path: '/data-table',
    name: 'data',
    component: () => import('../components/tables/datatable.vue')
  }
  ,
  {
    path: '/shipment_table',
    name: 'shipment_table',
    component: () => import('../components/shipment/shipments_client.vue')
  }
  ,
  {
    path: '/shipment_deatails',
    name: 'shipment_deatails',
    component: () => import('../components/shipment/shipment_Details.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/test/test1.vue')
  },
  {
    path: '/vechile-List',
    name: 'vechile-home',
    component: () => import('../components/vechile/list-vechile')
  },
  {
    path: '/add-vechile',
    name: 'add-vechile',
    component: () => import('../components/vechile/Add-vechile')
  }
  ,
  {
    path: '/Map-vechile',
    name: 'Map-vechile',
    component: () => import('../components/vechile/map-vechile')
  }
  ,
  {
    path: '/Add-Center',
    name: 'Add-Center',
    component: () => import('../components/Center/Add-Center')
  }
  ,
  {
    path: '/List-Centers',
    name: 'list_Centers',
    component: () => import('../components/Center/list-Center')
  },
  {
    path: '/Map-Center',
    name: 'Map-Center',
    component: () => import('../components/Center/map-Center')
  }
  ,
  
  {
    path: '/shipment-Center',
    name: 'shipment_Center',
    component: () => import('../components/Center/shipment-Center')
  }
  ,
  {
    path: '/login_company',
    name: 'login_company',
    component: () => import('../components/registeraiton/login_company')
  },
  {
    path: '/signUp_company',
    name: 'signUp_company',
    component: () => import('../components/registeraiton/Register_company')
  },
  {
    path: '/login_Employee',
    name: 'login_centers',
    component: () => import('../components/registeraiton/login_Employee')
  }
  , 
  {
    path: '/weather',
    name: 'wether',
    component: () => import('../components/weather/weather')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
