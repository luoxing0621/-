//引入express模块
const express=require('express')
//引入用户路由器模块--自定义
const app=express()
const ur=require('./routes/user.js')
//引入商品路由器模块
const pro=require('./routes/product.js')
//引入跨域
const cors=require('cors')
//设置端口
app.listen('8084',()=>{
 console.log('服务器启动成功')
})
//跨域
app.use(cors({}))
//使用中间件,将post传参转为对象
app.use(express.urlencoded({
  extented:true
 }))
//使用用户路由器，给所有的路由添加前缀/v1/users
app.use('/v1/users',ur)
//使用商品路由器，给所有商品路由添加前缀/v1/product
app.use('/v1/product',pro)
//添加一个错误处理的中间件，拦截所有路由的错误
app.use( (err,req,res,next)=>{
  //err 接收到的路由传递的错误
  console.log(err)
 //响应服务器端错误
  res.send({code:500,msg:"服务器有点小故障"})
 } )