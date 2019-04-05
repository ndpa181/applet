<template>
	<div class="project">
		<top></top>
		<!--{{itemtype}}-->
		<div class="null">
  		</div>
  		<!--双排排列布局模式-->
  		<div class="projectContent">
				<div class="project1">
				<figure v-for="(item,i) in data1" :key="i" @click="showView(item.id)">
					<div class="team" v-if="group_number[i]>0">
						团
					</div>
					<img :src="item.simg" />
						<!--是到点服务还是上门服务-->
						<div class="way" v-if="home[i]==1">
			         			  家
						</div>
						<div class="way" v-if="home[i]==-1">
			         			  店
						</div>
						<figcaption>
							<!--名称文字描述-->
							<div class="box">
								
								<p>{{item.name}}</p>
											<span class="group_number" v-if="group_number[i]>0">
											{{item.group_number}}人团
											</span>
							</div>
							<!--评论人数已售数量-->
							<div class="topDiv">
								<span class="left">已有{{item.discuss}}人评论</span>
								<span class="right">已售:{{item.sold}}</span>
							</div>
							<div id="bottomDiv">
								<!--原价现价-->
								<span class="price">
						      		<span class="n_price">&yen;{{item.price}}</span>
											<span class="o_price" v-if="o_price[i]"><del>&yen;{{item.o_price}}</del></span>
								</span>
								<!--购买按钮-->
								<span class="buy">
						      				<span class="buy1" v-if="group_status[i]==-1" @click.stop="buy()">购买</span>
											<span class="buy2" v-if="group_status[i]==1" @click.stop="buy()">单买</span>
											<span class="buy3" v-if="group_status[i]==1" @click.stop="showView(item.id)">拼团</span>
								</span>
							</div>
						</figcaption>
				</figure>
			</div>
			
			
				<div class="project2">
				<!--<figure v-for="(item,i) in data1" >-->
				<figure v-for="(item,i) in data1" :key="i" @click="showView(item.id)">
					<img :src="item.simg" />
				
					<figcaption>
						<div class="box" style="margin-bottom:5px ;">
							<!--名称文字描述-->
							<p>{{item.name}}</p>
							<!--原价现价-->
								<span class="price">
									<span class="n_price" v-if="width[i]<5">&yen;{{item.price}}</span>
									<span class="group_number" v-if="group_number[i]>0">
										{{item.group_number}}人团
									</span>
								</span>
						</div>
						   <div class="time">
						   	服务时长：<span class="s-time">{{item.service_time}}</span>
						   </div>
							标签：<span class="way" v-if="home[i]==1">
				         	 上门服务
							</span>
							<span class="way" v-if="home[i]==-1">
				          	 到店服务
							</span>
						<!--评论人数已售数量-->
						<div class="topDiv">
							<span class="left">已有{{item.discuss}}人评论</span>
							<span class="right">已售:{{item.sold}}</span>
							<!--购买按钮-->
									<span class="buy">
							      		<span class="buy1" v-if="group_status[i]==-1" @click.stop="showView(item.id)">购买</span>
										<span class="buy2" v-if="group_status[i]==1" @click.stop="showView(item.id)">开团</span>
									</span>
							
						</div>
						
					</figcaption>
				</figure>
			</div>
	</div>
	
</div>
</template>

<script>
	import top from '@/components/top/top'
	export default {
	name: 'project',
	props: ["data"],
	data() {
		return {
			msg: 'project',
			data1: {},
			home: [],
			group_status: [],
			o_price: [],
			group_number: [],
			width: []
		}
	},
	 components:{
  	top
  },
	created() {
		
		setTimeout(() => {
			this.data1 = this.data.data
			
			for(let index in this.data1) {
				this.home.push(this.data1[index].home)
				this.group_status.push(this.data1[index].group_status)
				this.o_price.push(this.data1[index].o_price)
				this.group_number.push(this.data1[index].group_number)
				this.width.push(this.data1[index].price.length)
			};
		}, 1000)
	},
//	mounted(){
////		this.clearpro()
//	},
	methods:{
		showView(id) {
			console.log("id", id)
				this.$router.push("/id/" + id)
			},
				buy(){
  		console.log("购买预约")
  		this.$router.push("/buy")
  	},
//	clearpro(){
//			var top=document.querySelector(".top")
//			var topc=document.querySelector(".top .typeContent")
//			var topf=document.querySelector(".top .typeContent figure")
//			var pro1=document.querySelector(".project .project1")
//			var pro2=document.querySelector(".project .project2")
//			if(topf!==null){
//				console.log("11111-------")
//				pro1.style.display="none"
//				pro2.style.display="none"
//			}else{
//				pro1.style.display="block"
//				pro2.style.display="block"
//			}
//				}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*select{
		border: white;
	}*/
	.project {
		margin-top:10px;
	}
	.null{
		width: 100%;
		background: #DBDBDB;
		height: 3px;
		margin-top: 30px;
	}
.project1 {
	width: 100%;
	height: 0;
	padding: 6px;
	box-sizing: border-box;
	background: white;
	margin-top: 3px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
/*服务项目每一项*/
.project1 figure {
	width: 49%;
	height: 210px;
	margin-bottom: 3px;
	padding: 3px 0;
	color: #909090;
	font-size: 14px;
	position: relative;
	overflow: hidden;
	/*border: solid 1px red;*/
}

/*服务项目首页图片*/

.project1 figure img {
	width: 100%;
	height: 133px;
}
/*左上角团购*/
.team{
	position: absolute;
   top: 4px;
   left: 0px;
   width: 35px;
   height: 35px;
   border-bottom-right-radius:35px;
   text-align: center;
  line-height: 25px;
  background: rgba(0,0,0,0.5);
  color: white;
}

/*右下角店或者家*/

.project1 .way {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: rgba(180, 180, 180, 0.8);
	position: absolute;
	bottom: 85px;
	right: 4px;
	color: white;
	text-align: center;
	line-height: 30px;
}


/*几人团*/

.project1 .group_number {
	border: solid 1px #e53774;
	padding: 0px 3px;
	border-radius: 3px;
	color: #e53774;
	margin-right: 3px;
	float: right;
}


/*文字描述*/

.project1 figcaption p {
	width: 73%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	float: left;
}


/*评价数量购买数量*/

.project1 .topDiv {
	overflow: hidden;
	border-bottom: dashed 1px #d8d8d8;
	/*border: solid 1px ;*/
}

.project1 .left {
	float: left;
}

.project1 .right {
	float: right;
	overflow: hidden;
}

.project1 #bottomDiv {
	margin-top: 3px;
}

.project1.n_price {
	font-size: 18px;
	color: #e53774;
}


/*价格购买按钮*/

.project1 .buy {
	float: right;
}

.project1 .buy span {
	color: white;
	padding: 0px 5px;
	border-radius: 4px;
	background: #e53774;
}


/*--------数列排列---------*/


/*描述价格*/

.box {
	color: black;
	overflow: hidden;
	/*border: solid 1px red;*/
	padding: 3px 0;
}

.project2 {
	width: 100%;
	box-sizing: border-box;
	background: white;
	margin-top: 3px;
	background: #f7f7f7;
	display: none;
}


/*服务项目每一项*/

.project2 figure {
	/*width: 100%;*/
	margin-bottom: 3px;
	padding: 10px 0;
	color: #909090;
	font-size: 14px;
	display: flex;
	justify-content: space-around;
	margin-bottom: 5px;
	background: white;
	box-sizing: border-box;
}

.project2 figcaption {
	width: 57%;
	line-height: 20px;
}


/*服务项目首页图片*/

.project2 figure img {
	width: 40%;
	height: 110px;
}


/*店或者家*/

.project2 .way {
	width: 60px;
	padding: 0 10px;
	height: 20px;
	border-radius: 15px;
	line-height: 20px;
	border: 1px solid #DBDBDB;
}


/*文字描述*/

.project2 figcaption p {
	width: 57%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	float: left;
}


/*服务时长*/

.project2 .time {
	margin-bottom: 10px;
}


/*评价数量购买数量*/

.project2 .topDiv {
	margin-top: 10px;
	overflow: hidden;
}

.project2 #bottomDiv {
	margin-top: 3px;
}

.project2 .n_price {
	font-size: 18px;
	color: black;
	padding-left: 3px;
	float: right;
}


/*几人团*/

.project2 .group_number {
	border: solid 1px #e53774;
	padding: 0px 3px;
	border-radius: 5px;
	color: #e53774;
	float: right;
	margin: 0 2px;
}


/*价格购买按钮*/

.project2.price {
	overflow: hidden;
}

.project2 .buy {
	float: right;
}

.project2 .buy span {
	color: white;
	height: 30px;
	padding: 5px 5px;
	border-radius: 7px;
	background: #e53774;
	line-height: 30px;
}

.top .project1,.top .project2{
	margin-top: 10px;
}
/*-----------------*/</style>