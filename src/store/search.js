// search模块的小仓库
import { reqGetSearchInfo } from "@/api"
// state:仓库存储数据的地方
const state ={
    searchList:{}
}
// mutatons：修改state的唯一手段
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
// action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
    async getSearchList({commit},params={}){
        // 当前这个reqGetSearchInfo这个函数子啊调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对像
        let result  =await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// getters：理解为计算属性，主要作用用于简化仓库数据，让组件获取仓库的数据更加方便
// 可以把我们将来在组件当中需要用的数据简化一下【将来组件获取数据的时候就方便了
const getters={
    // 当前形参state，当前仓库中的state，并非大仓库中的哪个state
    goodsList(state){
    // state.searchList.goodList如果服务器数据回来了，没问题是一个数组
    // 假如网络不给力没有网state.searchList.goodsList应该返回的是undefined
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
      },
      attrsList(state){
        return state.searchList.attrsList||[];
      }
}
export default {
    state,
    mutations,
    actions,
    getters
}