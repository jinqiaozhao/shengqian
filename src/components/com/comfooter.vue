/*
*作者---杨彬
*
*/
<template>
    <div class="comFoot">
        <router-link to="/index" tag="div" active-class="foot-active">
            <img class="one" src="../../assets/footer/homeIcon000.png">
            <img src="../../assets/footer/homeIcon001.png" class="two">
            <p class="text">首页</p>
        </router-link>
      <router-link to="/classify" tag="div" active-class="foot-active">
        <img class="one" src="../../assets/footer/cal000.png">
        <img src="../../assets/footer/cal001.png" class="two">
        <p class="text">分类</p>
      </router-link>
        <router-link to="/productCar" tag="div" active-class="foot-active">
            <img class="one" src="../../assets/footer/car000.png">
            <img src="../../assets/footer/car001.png" class="two">
            <p class="text">购物车</p>
          <span class="car-number" :class="{'car-number-more':carNumber=>99}" v-if="carNumber>0" v-text="carNumber<=99?carNumber:'99+'"></span>
        </router-link>
      <router-link to="/my" tag="div" active-class="foot-active">
        <img class="one" src="../../assets/footer/myIcon000.png">
        <img src="../../assets/footer/myIcon001.png" class="two">
        <p class="text">我的</p>
      </router-link>
    </div>
</template>
<script type="text/javascript">
  import sData from 'src/assets/projectStaticsData.js'
  export default {
    data(){
      return{
        carNumber:0,
        sData:sData
      }
    },
    created(){
      this.getAjax(this.url.isLogged,{},(res)=>{
        if(res.code==200&&res.data==true){
          this.getAjax(this.sData.url.getCountByUserId,{},(res)=>{
            if(res.code=200){
              this.carNumber = res.data.quantityCount
            }
          });
        }
      })

    }
  }
</script>
<style scoped lang="less">
.comFoot{
    background-color: #ffffff;
    border-top: 1px solid #e3e3e3;
    width: 100%;
    display: flex;
  .car-number{
    background-color: #E7607C;
    display: inline-block;
    border-radius: 0.15rem;
    vertical-align: bottom;
    line-height: 0.28rem;
    padding: 0 0.05rem;
    font-size: .12rem;
    height: 0.3rem;
    min-width: 0.30rem;
    _width: 0.3rem;
    color: #ffffff;
    position: absolute;
    top: 0.1rem;
    margin-left: 0.05rem;
  }
  .car-number-more{
    padding: 0 0.08rem;
  }
    >div{
        flex: 1;
        text-align: center;
        font-size: 0;
        padding-top: 0.14rem;
        height: 0.98rem;
        >img{
            height: 0.44rem;
        }
        .one{
       display: inline-block;
        }
        .two{
        display: none;
        }
        .text{
            height: 0.36rem;
            line-height: 0.36rem;
            margin-top:0.02rem;
            font-family:PingFangSC-Regular;
            font-size: 0.2rem;
            color:#9c9c9c;
            letter-spacing:1.59px;
            text-align:center;
        }
    }
    >.foot-active{

        .one{
            display: none;
        }
        .two{
            display: inline-block;
        }
        .text{
            color:#fb4874;
        }
    }
}
</style>
