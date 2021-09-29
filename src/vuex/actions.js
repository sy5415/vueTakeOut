/* 
包含n个间接更新状态数据的方法的对象
方法中可以包含异步和逻辑处理代码
 */
import {reqAddress,reqCategorys,reqShops} from '../api/index.js'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-types'
export default{
    async getAddress({commit,state}){
        //发送异步请求
        const result=await reqAddress(state.longitude,state.latitude)
        //请求成功后提交给mutation
        if(result.code===0){
        const address=result.data
        commit(RECEIVE_ADDRESS,address)
        }
    },
    async getCategorys({commit}){
        //发送异步请求
        const result=await reqCategorys()
        //请求成功后提交给mutation
        if(result.code===0){
        const categorys=result.data
        commit(RECEIVE_CATEGORYS,categorys)
        }
    },
    async getShops({commit,state}){
        //发送异步请求
        const result=await reqShops(state.longitude,state.latitude)
        //请求成功后提交给mutation
        if(result.code===0){
        const shops
        =result.data
        commit(RECEIVE_SHOPS,shops)
        }
    },

}
//reqCategorys,reqShops