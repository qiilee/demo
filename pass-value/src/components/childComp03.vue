<template>
  <div class="childComp-03">
    <div>子组件03内容：</div>
    {{fromParentToChild}}
  </div>
</template>
<script>
  export default{
    props:['fromParentToChild'],
    data(){
      console.log('子组件03：this.fromParentToChild='+this.fromParentToChild)   
      return {}   
    }
  }
</script>