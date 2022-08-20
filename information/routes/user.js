//引入express模块
const express=require('express')
//引入连接池
const pool=require('../pool')
//console.log(pool)
//创建路由器对象
const r=express.Router()
//查找所有用户信息      http://127.0.0.1:8084/v1/users/login
r.get('/every',(req,res,next)=>{
  var d=req.query
  // 执行sql命令
  pool.query('select * from ncp_user',[d],(err,r)=>{
    if(err){
      return next(err)
    }
    console.log(r)
    res.send({code:200,msg:'信息来了',data:r})
  })
})
//用户登录路由  http://127.0.0.1:8084/v1/users/login
r.post('/login',(req,res,next)=>{
  var oj=req.body
   console.log(oj)
 //执行sql语句 
  pool.query('select * from ncp_user where pname=? and ppwd=?',[oj.pname,oj.ppwd],(err,r)=>{
   if(err){
     //如果sql命令存在问题，交给下一个中间件处理
    return next(err)
   }
    console.log(r)
   if(r.length===0){
     res.send({code:404,msg:"登录失败"})
    }else{
   res.send({code:200,msg:"登录成功",data:r})
   }
  })
 })
 //用户注册路由  http://127.0.0.1:8084/v1/users/reg
 r.post('/reg',(req,res,next)=>{
  var obj=req.body
  console.log(obj);
  // 执行sql语句
  pool.query('insert into ncp_user set ?',[obj],(err,r)=>{
    if(err){
      return next(err)
    }
   console.log(r)
   var pname=req.body.pname
   if(pname==''){
    res.send({code:401,msg:'注册用户信息失败'})
    return
   }else{
    res.send({code:200,msg:'注册用户信息成功',data:r})
   }
  })
 })
 //暴露路由器对象
 module.exports=r