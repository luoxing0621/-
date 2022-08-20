<template>
    <div class="login">
    <!-- <form action="http://127.0.0.1:8084/v1/users/login" method="post"> -->
    <div class="login-container">
        <div class="left-container">
            <div class="title">
              <span>登录</span>
            </div>
            <div class="input-container">
                <input type="text" name="pname" placeholder="用户名" v-model="pname">
                <input type="password" name="ppwd" placeholder="密码" v-model="ppwd">
            </div>
            <div class="message-container">
                <span>忘记密码</span>
            </div>
        </div>
        <div class="right-container">
            <div class="regist-container">
                <span class="regist" @click="goReg">注册</span>
            </div>
            <div class="action-container">
                <span @click="getData">提交</span>
                <!-- <input type="submit"> -->
            </div>
        </div>
    </div>
<!-- </form> -->
  </div>

</template>

<script>
  export default {
    data() {
      return {
        data: null,
        pname:'',
        ppwd:'',
      }
    },
    methods: {
      getData() {
        var url='http://127.0.0.1:8084/v1/users/login'
        const params=`pname=${this.pname}&ppwd=${this.ppwd}`
        this.axios.post(url,params).then(res=>{
          console.log(res);
          this.data=res.data

          //console.log(this.data);
        if(this.data.code==200){
           this.$store.commit('updateUserInfo',this.pname)
          this.$router.push('/')
        }else{
          alert('登录失败')
        }
        })  
      },
      goReg(){
      this.$router.push('/register')
     },
    },
    // mounted(){
    //   this.getData()
    // }
  }
</script>

<style scoped src="../assets/css/login.css"></style>
<style lang="scss" scoped>
</style>