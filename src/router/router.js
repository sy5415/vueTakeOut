//所有路由的配置数组
//引入主页路由组件
import Msite from '../pages/Msite/Msite.vue'
//引入搜索框路由组件
import Search from '../pages/Search/Search.vue'
//引入菜单路由组件
import Order from '../pages/Order/Order.vue'
//引入组件
import Profile from '../pages/Profile/profile.vue'
export default [
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
