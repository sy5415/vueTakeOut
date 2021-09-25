import Vue from 'vue'
import  VueRouter from 'vue-router'
import routes from './router.js'
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',//路由路径没有# 默认路径为hash路径是有#的
    //配项目中的所有路由
    routes
})





// export default new VueRouter({
//     mode:'history',//路由路径没有# 默认路径为hash路径是有#的
//     //配项目中的所有路由
//     routes:[
//         {
//             path:'msite',
//             component:Msite
//         },
//         {
//             path:'search',
//             component:Search
//         },
//         {
//             path:'order',
//             component:Order
//         },
//         {
//             path:'profile',
//             component:Profile
//         },
//         {
//             path:'footer',
//             component:FooterGuide
//         },
//     ]
// })