<template>
   <div id="Shiliuguo">
       <Nheaders></Nheaders>
        <router-view></router-view>
       <Nfooter></Nfooter>
   </div>
</template>

<script>
    import Nheaders from './Nheaders'//头部导航
    import Nfooter from './Nfooter'//底部国家
export default {
name:"Shiliuguo",
components:{
   Nheaders,
    Nfooter
}

}
</script>

<style scoped> 

</style>
