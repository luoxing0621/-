<template>
  <div class="register">
     <div class="reg-container">
        <div class="left-container">
            <div class="title">
              <span>注册</span>
            </div>
            <div class="input-container" >
                <input type="text" name="pname" placeholder="用户名" v-model="pname">
                <input type="password" name="ppwd" placeholder="密码" v-model="ppwd">
                <input type="password" placeholder="确认密码" v-model="ppwd1">
                <input type="text" name="email" placeholder="邮箱" v-model="email">
                <input type="text" name="phone" placeholder="手机号" v-model="phone">
            </div>
            <!-- <div class="message-container">
                <span>忘记密码</span>
            </div> -->
        </div>
        <div class="right-container">
            <div class="regist-container">
                <span class="regist" @click="goLogin">登录</span>
            </div>
            <div class="action-container">
                <span @click="getData">提交</span>
                <!-- <input type="submit"> -->
            </div>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
        pname:'',
        ppwd:'',
        ppwd1:'',
        email:'',
        phone:'',
      }
    },
    methods: {
      getData() {
        var url='http://127.0.0.1:8084/v1/users/reg'
        const params=`pname=${this.pname}&ppwd=${this.ppwd}&email=${this.email}&phone=${this.phone}`
        this.axios.post(url,params).then(res=>{
          console.log(res);
          this.data=res.data
         if(this.data.code==200){
          this.$router.push('/login')
        }else{
          alert('注册失败')
        }  
        })   
      },
      goLogin(){
        this.$router.push('/login')
      }
    },
    // mounted () {
    //   this.getData();
    // },
  }
</script>
<style scoped src="../assets/css/reg.css"></style>
<style lang="scss" scoped>
</style>