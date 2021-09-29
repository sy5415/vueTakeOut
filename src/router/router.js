//所有路由的配置数组
//引入主页路由组件
import Msite from '../pages/Msite/Msite.vue'
//引入搜索框路由组件
import Search from '../pages/Search/Search.vue'
//引入菜单路由组件
import Order from '../pages/Order/Order.vue'
//引入组件
import Profile from '../pages/Profile/profile.vue'
//引入登录注册组件
import Login from '../pages/Login/Login.vue'
export default [
        {
            path:'/msite',
            component:Msite,
            //路由元信息判断这些路由显示对应组件
            meta:{
                //是否显示底部导航栏
                isShowFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            //路由元信息判断这些路由显示对应组件
            meta:{
                //是否显示底部导航栏
                isShowFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            //路由元信息判断这些路由显示对应组件
            meta:{
                //是否显示底部导航栏
                isShowFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            //路由元信息判断这些路由显示对应组件
            meta:{
                //是否显示底部导航栏
                isShowFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/msite'
        },
    ]
