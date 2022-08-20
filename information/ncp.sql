SET NAMES UTF8;
DROP DATABASE IF EXISTS ncp;
CREATE DATABASE ncp CHARSET=UTF8;
USE ncp;

/**用户信息***/
CREATE TABLE ncp_user(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(32),
  ppwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  gender INT         #性别  0-女  1-男
);
/**创建商品分类表****/
create table ncp_classify(
  cid int primary key auto_increment,
  cname varchar(16) unique
);
/**创建商品数据表   商品详情数据表****/
create table ncp_goods(
  gid int primary key auto_increment,
  gname varchar(16) not null,
  price decimal(8,3),   #999999.99
  pic varchar(128),
  -- bplace varchar(10),  //产地
  -- bcity varchar(12),   //城市
  -- bpurity varchar(15),  //
  -- bmin varchar(15),
  -- bdepot varchar(20),
  cid int,
  foreign key(cid) references ncp_classify(cid)
);
/***创建购物车商品数据表***/
create table ncp_buy(
  bid int primary key auto_increment,
  bname varchar(16) not null,
  bplace varchar(10),
  bcity varchar(12),
  bpurity varchar(15),
  bmin varchar(15),
  bdepot varchar(20),
  bprice decimal(8,3),   #999999.99
  bpic varchar(128),
  bnum int,
  selected boolean
);
/***商品详情数据表*****/
create table ncp_prodetails( bid int primary key auto_increment,
  dname varchar(16) not null,
  dplace varchar(10),
  dcity varchar(12),
  dpurity varchar(15),
  dmin varchar(15),
  ddepot varchar(20),
  dprice decimal(8,3),   #999999.99
  dpic varchar(128)
);
/***商品收藏****/
create table ncp_collect( 
  lid int primary key auto_increment,
  lname varchar(16) not null,
  lprice decimal(8,3),   #999999.99
  lpic varchar(128)
);
/***数据插入***/
/***用户数据信息****/
INSERT INTO ncp_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '1');
/***商品分类数据信息****/
insert into ncp_classify values(10,'水果');
insert into ncp_classify values(20,'蔬菜');
insert into ncp_classify values(30,'肉类');
insert into ncp_classify values(40,'日常');
/***商品数据信息****/
INSERT INTO ncp_goods VALUES(NULL,'香蕉',3.50,'img/product-2-1.jpg',10);
INSERT INTO ncp_goods VALUES(NULL,'苹果',1.50,'img/product-1-4.jpg',10);
INSERT INTO ncp_goods VALUES(NULL,'无花果',15.50,'img/product-2.jpg',10);
INSERT INTO ncp_goods VALUES(NULL,'杨梅',5.00,'img/product-6.jpg',10);
INSERT INTO ncp_goods VALUES(NULL,'青菜',0.80,'img/product-1-9.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'菠菜',1.80,'img/product-1.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'西红柿',1.50,'img/product-2-4.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'包菜',1.00,'img/product-4.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'洋葱',2.00,'img/product-1-8.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'胡萝卜',1.00,'img/product-5.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'花椰菜',2.50,'img/product-3.jpg',20);
INSERT INTO ncp_goods VALUES(NULL,'鸡蛋',1.50,'img/product-2-3.jpg',30);
INSERT INTO ncp_goods VALUES(NULL,'蜂蜜',6.00,'img/product-1-7.jpg',40);
INSERT INTO ncp_goods VALUES(NULL,'面包',3.50,'img/product-1-3.jpg',40);
INSERT INTO ncp_goods VALUES(NULL,'梅酒',11.50,'img/product-1-5.jpg',40);
INSERT INTO ncp_goods VALUES(NULL,'桃子',3.50,'img/product-5.1.jpg',10);
/****购物车商品数据******/
INSERT INTO ncp_buy VALUES(NULL,'香蕉1','中国 china','山西','99.7%','1015克','上海仓海仓储','1.50','img/cart-1-1.jpg','1',false);
INSERT INTO ncp_buy VALUES(NULL,'西红柿2','中国 china','陕西','95.7%','2015克','上海仓海仓储','2.50','img/cart-1-2.jpg','1',false);
INSERT INTO ncp_buy VALUES(NULL,'香蕉3','中国 china','山西','99.7%','1015克','上海仓海仓储','3.50','img/cart-1-1.jpg','1',false);
INSERT INTO ncp_buy VALUES(NULL,'西红柿4','中国 china','陕西','95.7%','2015克','上海仓海仓储','5.50','img/cart-1-2.jpg','1',false);
/*** 商品收藏数据*****/
INSERT INTO ncp_collect VALUES(NULL,'香蕉',3.50,'img/product-2-1.jpg');
INSERT INTO ncp_collect VALUES(NULL,'苹果',1.50,'img/product-1-4.jpg');
INSERT INTO ncp_collect VALUES(NULL,'无花果',15.50,'img/product-2.jpg');
INSERT INTO ncp_collect VALUES(NULL,'杨梅',5.00,'img/product-6.jpg');
