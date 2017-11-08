<template>
  <div class="childComp-02" v-if="isShow">
    <div>子组件02内容：</div>
    {{fromParentToChild}}
    <div><button @click="toParentComp">点击子组件02向父组件传值</button></div>
  </div>
</template>
<script>
  export default{
    props:['isShow','fromParentToChild'],
    data(){
      console.log('子组件02：this.fromParentToChild='+this.fromParentToChild)      
      return{
        dataIf:{
          show:true,
          mes:"从子组件02传过来的值"
        }
      }
    },
    methods:{
      toParentComp(){
        this.$emit("eventFromChild02",this.dataIf)
      }
    }
  }
</script>