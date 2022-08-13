// 根路径文件
<template>
  <div>
    <!-- <h1 v-upper="msg"></h1> -->
    <Header/>
    <!-- 路由组件出口的地方 -->
    <router-view/>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'"></Footer> -->
    <!-- 利用路由元信息解决当前问题好处：一行代码可以解决 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'',
  components:{
    Header,Footer
  },
  mounted(){
    // 派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList")
   
  },
  data(){
    return{
      msg:"abc"
    }
  }
}
</script>

<style>

</style>