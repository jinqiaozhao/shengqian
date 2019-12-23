<template>
  <div class="sort">
    <div class="sort-brand" >
      <P>热门搜索</P>
    </div>
    <div class="t-sort-button" >
			<div v-if="route==34" v-for="(brand,index) in brand5" v-text="brand"  class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
      <div v-if="route==32" v-for="(brand,index) in brand4" v-text="brand"  class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
      <div v-if="route==3" v-for="(brand,index) in brand3" v-text="brand"  class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
      <div v-if="route==2" v-for="(brand,index) in brand2" v-text="brand"  class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
      <div v-if="route==1" v-for="(brand,index) in brand1" v-text="brand" class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
      <div v-if="route==0" v-for="(brand,index) in brand" v-text="brand"  class="select-buton-test"   v-bind:class="{ 'class-a': isActive==index+1 }" @click="searchValFun($event,brand,index)"></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
    return {
      isActive:'',
      brand:['洗护','零食','手机','养生茶','家电周边','进口','女士','男士','纸巾','苹果'],
      brand1:['开关','家电周边','JBL','插座','耳机','音箱'],
      brand2: ['精选零食','办公零食','零嘴','糕点','饼干','进口零食','禽肉','辣','养生茶'],
      brand3:['男士','女士','抽纸','洗衣','个人洗护','进口个人洗护'],
      brand4:['手机配件','华为','苹果','美图','游戏手机','拍照手机','大屏手机'],
      brand5:['进口粮用油','辣椒','豆','下饭菜'],
      route:this.$route.params.id,
      i:'',
    }
  },
  methods:{
    searchValFun (event,val,i) {
      var obj={};
      obj.val=val;
      obj.type='1';
      this.$emit('getSearchValue',obj);
    },
//    searchValFun (event,val,i){
//      var obj={};
//      obj.type='1';
//      if((this.i)-1==i){
//        this.isActive='';
//        obj.val='';
//        this.$emit('getSearchValue',obj);
//        this.i=i;
//      }else{
//      obj.val=val;
//      this.$emit('getSearchValue',obj);
//      this.isActive=i+1;
//      this.i=i+1;}
//    },
  },
  watch: {
    '$route': function (val) {
      this.pageNum = 1;
     // this.productData = [];
     // this.getData(val.params.id,0)
      this.route=val.params.id;
      this.isActive='';
    }
  },
  }
</script>
<style scoped lang="less">
  .sort {
    margin-top: 2.2rem;
    width: 7.5rem;
    padding-bottom:0.1rem;
    background-color: #FFF;
  .sort-brand {
  p{
    padding-top: .05rem;
    margin-left: 0.24rem;
    font-size: 0.3rem;
    color: #D94E6A;
  }
  }
  .t-sort-button{
    font-size: 0.28rem;
  >.select-buton-test {
     display: inline-block;
     border-radius: 1rem;
     height: 0.5024rem;
     padding: .04rem .26rem .1rem .2rem;
     margin: .05rem .1rem .05rem .1rem;
     background-color:#F5F5F5;
   }
  .class-a{
     background-color:#fb4874;
    color:white;
   }
  }
  }
</style>
