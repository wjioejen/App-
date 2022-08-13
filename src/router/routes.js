// 引入路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

const foo = ()=>{
    return import("@/pages/Home")
}
// 他们打包应用时，javascript 包会变得非常大 影响页面加载。
// 如果我们能把不同路由对应组件分割成不同得代码块，然后当路由被访问得时候才加载对应组件这样就更加高效了


// 配置路由
export default [
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        // 二级路由组件
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                // 重定向
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: true },
        // beforeEnter:(to,from,next)=>{
        //     if(from.path == "/trade"){
        //         next();
        //     }else{
        //         next(false)
        //     }
        // }
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // 去交易页面，必须是从购物车而来
            if(from.path =="/shopcart"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        name:'addcartsuccess',
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/home',
        component: ()=>import("@/pages/Home"),
        // 路由元信息key不能瞎写：只能叫做meta
        meta: { show: true }
    },
    {
        path: '/search/:keyword?',
        component:()=>import("@/pages/Search"),
        meta: { show: true },
        name: "search",  // 是当前路由的标识名称
        // 路由组件能不能传递props数据？
        // 布尔值写法：params
        // props:true
        // 对象写法：额外给路由组件传递一些props
        // props:{a:1,b:2}
        // 函数写法：可以params参数、query参数，通过props传递给路由组件
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.k }
        }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
    {
        path: '*',
        redirect: '/home'
    },

    {
        path:"/home",
        component:foo,  
        meta:{show:true}
    }
]