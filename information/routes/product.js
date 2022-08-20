/****商品路由器模块*****/
//引入模块
const express=require('express')
const pool=require('../pool.js')
//创建商品路由器
const router=express.Router()
//1.完成接口：查询ncp_goods表中所有商品的信息
//返回结果：所有商品的信息  http://127.0.0.1:8084/v1/product/showpro
router.get('/showpro',(req,res,next)=>{
	var d=req.query
		//console.log(d)
	//执行sql命令
	pool.query('select * from ncp_goods',[d],(err,r)=>{
	 if(err){
	 return next(err)
	 }
		console.log(r) 
		res.send({code:200,msg:"查询成功",data:r})
	})
})
// 查询商品分类信息
http://127.0.0.1:8084/v1/product/selectpro/2
router.get('/selectpro/:cid',(req,res,next)=>{
  var d=req.params
	console.log(d);
	var s='select * from ncp_goods where cid= ?'
  pool.query(s,[d.cid],(err,r)=>{
    if(err){
      return next(err)
      }
       console.log(r) 
       res.send({code:200,msg:"查询成功",data:r})
  })
})
// 查询商品某一条信息
http://127.0.0.1:8084/v1/product/selectgoods?gid=2
router.get('/selectgoods',(req,res,next)=>{
  var d=req.query
	console.log(d);
	var s='select * from ncp_goods where gid= ?'
  pool.query(s,[d.gid],(err,r)=>{
    if(err){
      return next(err)
      }
       console.log(r) 
       res.send({code:200,msg:"查询成功",data:r})
  })
})
//分页查询
// http://127.0.0.1:8084/v1/product/page  /1/10
// router.get('/page/:page/:pageSize',(req,res)=>{
//   let pageNo = Number(req.params.page) || 1;
//   let pageCount = Number(req.params.pageSize) || 10;
router.post('/page',(req,res)=>{
  let pageNo = Number(req.body.page) || 1;
  let pageCount = Number(req.body.pageSize) || 6;
  let pageSize = pageCount;
  let page = (pageNo - 1) * pageCount;
  console.log(page,pageSize);
  let sqlStr = `select * from ncp_goods limit ${page},${pageSize}`;
  pool.query(sqlStr,(error,results)=>{
    if(error){
      console.log(error);
      res.send({ err_code: 0, message: "获取分页数据失败"});
    }else{
      console.log(results);
      res.send({success_code: 200, message: '获取分页数据成功', data: results })
    }
  })
})

//查询购物车数据
// http://127.0.0.1:8084/v1/product/showbuy
router.get('/showbuy',(req,res,next)=>{
	var d=req.query
		//console.log(d)
	//执行sql命令
	pool.query('select * from ncp_buy',[d],(err,r)=>{
	 if(err){
	 return next(err)
	 }
		console.log(r) 
		res.send({code:200,msg:"查询成功",data:r})
	})
})
// 删除购物车商品数据
// http://127.0.0.1:8084/v1/product/del?bid=3
router.delete('/del',(req,res,next)=>{
  var bid=req.query.bid
  console.log(bid)
//执行sql命令
pool.query('delete from ncp_buy where bid=?',[bid],(err,r)=>{
 if(err){
 return next(err)
 }
 console.log(r)
if(r.affectedRows>0){
res.send({code:200,msg:"删除成功"})}
else{
res.send({code:501,msg:"删除失败"})
}
})
})
// 加入购物车商品数据
//http://127.0.0.1:8084/v1/product/add ?bid=5
router.post('/add',(req,res,next)=>{
  var data=req.body
 console.log(data)
    //执行sql命令
  pool.query('insert into ncp_buy set ?',[data],(err,r)=>{
   if(err){
   return next(err)
   }
   console.log(r)
  res.send({code:200,msg:"商品信息成功插入"})
  })
 }) 
//  查询所有商品收藏数据
// http://127.0.0.1:8084/v1/product/showcollect
router.get('/showcollect',(req,res,next)=>{
	var d=req.query
		//console.log(d)
	//执行sql命令
	pool.query('select * from ncp_collect',[d],(err,r)=>{
	 if(err){
	 return next(err)
	 }
		console.log(r) 
		res.send({code:200,msg:"查询成功",data:r})
	})
})
// 加入收藏商品数据
//http://127.0.0.1:8084/v1/product/addcontallect 
router.post('/addcontallect',(req,res,next)=>{
  var data=req.body
 console.log(data)
    //执行sql命令
  pool.query('insert into ncp_collect set ?',[data],(err,r)=>{
   if(err){
   return next(err)
   }
   console.log(r)
  res.send({code:200,msg:"收藏商品信息成功插入"})
  })
 }) 
 // 删除收藏商品数据
// http://127.0.0.1:8084/v1/product/delcollect?lid=3
router.delete('/delcollect',(req,res,next)=>{
  var lid=req.query.lid
  console.log(lid)
//执行sql命令
pool.query('delete from ncp_collect where lid=?',[lid],(err,r)=>{
 if(err){
 return next(err)
 }
 console.log(r)
if(r.affectedRows>0){
res.send({code:200,msg:"删除成功"})}
else{
res.send({code:501,msg:"删除失败"})
}
})
})

// 模糊查询
// http://127.0.0.1:8084/v1/product/seleinput
router.get('/seleinput',(req,res,next)=>{
	var d=req.query.gname
  // console.log(d)
  var gname='%'+d+'%'
	//执行sql命令
	pool.query("select * from ncp_goods inner join ncp_classify on ncp_classify.cid=ncp_goods.cid and gname like ?",[gname],(err,r)=>{
	 if(err){
	 return next(err)
	 }
   if(r.length>0){
    console.log(r) 
    res.send({code:200,msg:"查询成功",data:r})
   }else{
    res.send({code:501,msg:"查询失败"})
   }
	})
})
//查询名称对应数据
// http://127.0.0.1:8084/v1/product/selectname
router.get('/selectname',(req,res,next)=>{
	var d=req.query.gname
		//console.log(d)
	//执行sql命令
	pool.query('select * from ncp_goods where gname= ?',[d],(err,r)=>{
	 if(err){
	 return next(err)
	 }
		console.log(r) 
		res.send({code:200,msg:"查询成功",data:r})
	})
})



//暴露路由器
module.exports=router