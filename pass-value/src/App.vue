<template>
<div>
  <!-- 父组件 -->
  <p>{{fromParentToChild}}</p>
  <!-- 子组件1 -->
  <childComp01 :fromParentToChild="fromParentToChild" @showParentComp01="eventFromChild01" :isShow="show"></childComp01>
  <!-- 子组件2 -->
  <childComp02 :fromParentToChild="fromParentToChild" @eventFromChild02="eventFromChild02" :isShow="show"></childComp02>
  <!--子组件3 自测props-->
  <childComp03 :fromParentToChild="fromParentToChild"></childComp03>
</div>

</template>
<script>
import childComp01 from './components/childComp01'
import childComp02 from './components/childComp02'
import childComp03 from './components/childComp03'

export default{
  data(){
    return{
      show:true,//是否展示子组件内容 默认显示子组件01
      fromParentToChild:"这是父组件的值"
    }
  },
  components:{childComp01,childComp02,childComp03},
  methods:{
    showChild(){
      this.show = false
    },
    eventFromChild01(dataIf){
      console.log(dataIf.show)
      this.show=dataIf.show
      this.fromParentToChild = dataIf.mes
    },
    eventFromChild02(dataIf){
      console.log(dataIf.show)
      this.show=dataIf.show
      this.fromParentToChild = dataIf.mes
    }
  }
}
</script>