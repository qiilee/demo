<template>
  <div v-if="isShow">
    <div>子组件01内容：</div>
    {{fromParentToChild}}
    <div>
      <button @click="showParentComp">点击子组件01向父组件传值</button>
    </div>
  </div>
</template>
<script>
  export default{
    props:['fromParentToChild','isShow'],
    data(){
      console.log('子组件01：this.fromParentToChild='+this.fromParentToChild)
      return{
        dataIf:{
          mes:"来自子组件01的值",
          show:true
        }
      }
    },
    methods:{
      showParentComp(){
        this.$emit("showParentComp01",this.dataIf)
      }
    }
  }
</script>