// Vue插件一定暴露一个对象
let myPlugins={}

myPlugins.install = function(Vue,options){
    // Vue.prototype.$bus:任何组件都可以调用
    // vue.directive
    // Vue.component
    // VUe.filter....
    // 全局指令
    Vue.directive(options,name,(element,b)=>{
        element.innerHTML = params.value.toUpperCase()
        console.log(params);
    })
}
export default myPlugins