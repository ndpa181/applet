<template>
  <div class="details">
  	<!--返回键-->
	  <div class="back" @click="back()">
	  	<span><</span>
	  </div>
	  <!--详情描述-->
  	<div class="content" v-for="(item,index) in data.data" :key="index">
  		<div v-if="item.id==id1" class="content2">
  		<!--轮播图位置-->
  			<div class="banner">
  				<!--<img :src="item.bimg[0]"/>-->
  				<mt-swipe :auto="4000">
  <mt-swipe-item><img :src="item.bimg[0]"/></mt-swipe-item>
	  <!--<mt-swipe-item>2</mt-swipe-item>
	  <mt-swipe-item>3</mt-swipe-item>-->
</mt-swipe>
  				
  				
  				
  				
  			</div>
  			<!--中间文字-->
  			<div class="des">
	  				<div class="des1">
		  					<div class="des-name">{{item.name}}</div>
		  					<span class="price">￥{{item.price}}</span><del class="o_price">￥{{item.o_price}}</del>
	  				</div>
	  				<!--多少人参与了评价-->
	  				<div class="des2">
	  						<span class="discuss">{{item.discuss}}人参与了评价</span><a class="all" @click="fn()">查看全部&gt;</a>
	  				</div>
  			</div>
  			<!--服务时长方式-->
  			<div class="serve ">
  				<div class="s-time">
  					<img :src="item.content" alt="" />
  					<span>服务时长：【{{item.service_time}}分钟】</span>
  				</div>
  				<div class="s-type">
  					<img :src="item.content" alt="" />
  					<span>服务方式：【到店服务】</span>
  				</div>
  				<!--适用门店-->
  				<div class="fitstore">
  					<span class="f-s-l">适用门店</span><a class="f-s-r" @click="fn1()">查看门店&gt;</a>
  				</div>
  			</div>
  			<!--图文详情-->
  			<div class="img-des">
  				<h3>图文详情</h3>
  				<div class="img-des-title">
  						<li></li>	<dd>GRAPHIC DETAILS</dd><li></li>
  				</div>
  				<!--{{item.content}}-->
  				<!--下面的图片-->
  				<div class="b-img" v-for="(item2,index2) in JSON.parse(item.content)" :key="index2">
  					<!--<div>{{item2}}</div>-->
  					<img :src="item2.content" alt=""/>
  				</div>
  				
  			</div>
  		</div>
  		
  	</div>
  	<!--{{data}}-->
  	<!--下面的跳转-->
  			<div class="bottom">
	  			<a class="home" @click="home()">首页</a>
	  			<a class="buy" @click="buy()">购买预约</a>
  		</div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
export default {
	props:['data'],
  name: 'detail',
  data(){
    return {
      msg: '123',
      id1:0
      
    }
  },
  created(){
//	setTimeout(function(){
//		console.log("11",this.data)
//	},1000)
  	//获取id值
  	console.log(this.$route.params.id)
  	this.id1 = this.$route.params.id
  	//判断数据
//	for (var i = 0; i < this.data.length; i++) {
//			if(this.data[i].id == id1){
//				this.msg = this.data[i]
//				console.log(this.msg)
//			}
//	}
  },
//mounted(){
//	setTimeout(function(){
//		console.log("11",this.data)
//	},1000)
//},
  methods:{
  	back(){
  		console.log("返回")
  		history.go(-1)
  	},
  	fn(){
  		console.log("评论")
  		this.$router.push("/discuss")
  	},
  	fn1(){
  		console.log("查看门店")
  		this.$router.push("/store")
  	},
  	home(){
  		console.log("首页")
  		this.$router.push("/home")
  	},
  	buy(){
  		console.log("购买预约")
  		this.$router.push("/buy")
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*返回按钮*/
.back{
	width: 100%;
	padding: 6px;
	font-size: 25px;
	font-weight: 600;
	background: white;
	position: fixed;
  top: -1px;
  box-sizing: border-box;
}
/*详情页*/
.details{
	position: absolute;
	top:0;
	overflow: scroll;
	width: 100%;
	height: 100vh;
	background: #e7e7e7;
	z-index: 1000;
}
/*轮播图*/
.content{
	width: 100%;
	margin-top: 36px;
}
.content2{
	width: 100%;
}
.details .banner{
	width: 100%;
	height: 245px;
	/*border: solid 1px red;*/
}
.details .banner img{
	width: 100%;
	height: 245px;
	
}

.des{
	
}
/*名字价格*/
.des1{
	width: 100%;
	box-sizing: border-box;
 border-bottom: dashed 1px #d8d8d8;
	background: white;
	padding: 7px 10px;
 
	} 
.des1 .des-name{
	font-size: 17px;
} 
.des1 span{
	font-size: 18px;
	color: #e53774;
}
.des1 .o_price{
	color: #909090;
}
/*几人评价 查看全部*/
.des2{
	padding: 7px 10px;
	color:#909090 ;
	font-size: 16px;
	overflow: hidden;
	background: white;
	margin-bottom: 4px;
}
/*评价*/
.des2 .decrease{
	float: left;
}
/*查看全部*/
.des2 .all{
	float: right;
}
/*服务时长服务方式*/
.serve{
	color: #555;
	font-size: 16px;
	padding: 6px 5px;
	background: white;
}
.s-time,.s-type{
	border-bottom: dashed 1px #d8d8d8;
	padding: 6px 0px;
}
/*适用门店*/
.fitstore{
	padding: 10px 5px;
	color:#909090 ;
	font-size: 16px;
	overflow: hidden;
}
.f-s-l{
	float: left;
}
.f-s-r{
	float: right;
}
/*带横线的标题*/
.img-des{
	background: white;
	text-align: center;
}
.img-des-title{
	display: flex;
	justify-content: space-between;
	height: 30px;
	font-size: 18px;
	padding: 6px 5px;
}
.img-des-title li{
	width: 25%;
	line-height: 30px;
	height: 15px;
	border-bottom: solid 1px #bbb;
	
}
/*图片详情里的图片信息*/
.b-img{
	width: 100%;
}

.b-img img{
	width: 100%;
	
}
.bottom{
	width: 100%;
	background: white;
	display: flex;
	text-align: center;
  line-height: 50px;
  font-size: 18px;
}

.bottom .home{
	display: block;
	width: 50%;
	height: 50px;
	background: white;
}

.bottom .buy{
	display: block;
	width: 50%;
	height: 50px;
	background: #e53774;
	color: white;
}






</style>
