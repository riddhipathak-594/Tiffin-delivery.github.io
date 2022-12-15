import homePage from './components/homePage.vue'
import SignUp from './components/SignUp.vue'
import loginPage from './components/loginPage.vue'
import addResto from './components/addResto.vue'
import upDate from './components/upDate.vue'
import {createRouter,createWebHistory} from 'vue-router'
const routes=[
    {
        name:"homePage",
        component:homePage,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:"loginPage",
        component:loginPage,
        path:'/login'
    },
    {
        name:"addResto",
        component:addResto,
        path:'/add'
    },
    {
        name:"upDate",
        component:upDate,
        path:'/update/:id'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router
