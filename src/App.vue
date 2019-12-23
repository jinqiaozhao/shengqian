<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>
<script type="text/javascript">
  //import sData from 'src/assets/projectStaticsData.js'
  export default {
    name: 'app',
    data(){
      return {
        gotop:false,
        oH:'',
        ismyLogin: false,
        thisUrl: [],
        thisUrlFlag: false,
      }
    },
    methods: {

      goPrePage(){
        var othis = this;
        if (this.thisUrlFlag == true) {
          return;
        }
        this.thisUrlFlag = true;
        setTimeout(function () {
          othis.thisUrlFlag = false;
        }, 400)
        if (this.thisUrl.length <= 1) {

        }
        else {

          var ourl = this.$route.fullPath;
          var willReg = '/' + this.thisUrl[this.thisUrl.length - 1].split('/')[1]
          if (ourl.indexOf(willReg) >= 0 && ourl != this.thisUrl[this.thisUrl.length - 1]) {

          }
          else {
            this.thisUrl.splice(this.thisUrl.length - 1, 1);
          }
          this.$router.push(this.thisUrl[this.thisUrl.length - 1])
        }
      },

    },
    created(){
      m$.resizes(100, 750, window)
    },
    beforeCreate(){
      var oGetUrlT = window.location.href.split("#")[0];
	  console.log(oGetUrlT)
   
    }
  }
</script>
<style lang='less' scoped>
	
  #app {
    width: 7.5rem;
    overflow-x: hidden;
	   
  }

  #appBack {
    position: fixed;
    top: 2rem;
    left: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: rgba(31, 31, 31, 0.5);
    padding: 0.1rem;
    z-index: 9999999;
    font-size: 0;
    > button {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
</style>
