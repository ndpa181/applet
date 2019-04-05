<template>
	<div class="top">
		<div id="nav">
			<li @click="showAll()" class="allBtn">全部</li>
			
			<select name="" v-if="data1" v-model="value" @change="type">
				<option>类别</option>
				<option v-for="(item1,i) in data1" :key="i">{{item1.name}}</option>
			</select>
			<select name="" v-model="value2"  @change="stype">
				<option >方式</option>
				<option>上门服务</option>
				<option >到店服务</option>
			</select>
			<li class="composing1" @click="fn1"></li>
			<li class="composing2" @click="fn2"></li>
		</div>
		<!--分类展示-->
<div class="typeContent" v-if="itemtype.length>=0&&itemtype.length<res.length">
	<div class="null">
  		</div>
		<div class="project1">
			<figure v-for="(item,i) in itemtype" :key="i" @click="showView(item.id)">
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
						<!--<span class="o_price" v-if="o_price[i]"><del>&yen;{{item.o_price}}</del></span>-->
						</span>
						<!--购买按钮-->
						<span class="buy">
				      		<span class="buy1" v-if="group_status[i]==-1">购买</span>
						<span class="buy2" v-if="group_status[i]==1">单买</span>
						<span class="buy3" v-if="group_status[i]==1">团买</span>
						</span>
					</div>
				</figcaption>
			</figure>
		</div>

		<div class="project2" v-if="itemtype">
			<!--<figure v-for="(item,i) in data1" >-->
			<figure v-for="(item,i) in itemtype" :key="i" @click="showView(item.id)">
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
					      		<span class="buy1" v-if="group_status[i]==-1">购买</span>
						<span class="buy2" v-if="group_status[i]==1">开团</span>
						</span>

					</div>

				</figcaption>
			</figure>
		</div>
</div>
	</div>
</template>

<script>
	import axios from 'axios'
import { Toast } from 'mint-ui'
	export default {
		name: 'top',
		data() {
			return {
				data1: [],
				res: [],
				cid: [],
				value: [],
				value2:["上门服务","到店服务"],
				sitemtype1:[],
				sitemtype2:[],
				itemtype: [],
				home: [],
				group_status:[],
				o_price: [],
				group_number:[],
				width: [],
			}
		},
		created() {
			this.getData1(),
			this.getData(),
			Toast('正在玩命加载~');
			setTimeout(() => {
				this.stype1()
				this.stype2()
				this.value=["类别"][0]
				this.value2=["方式"][0]
				for(let index in this.res) {
				Toast('加载完成');
				this.cid.push(this.res[index].cid)
				this.home.push(this.res[index].home)
				this.group_status.push(this.res[index].group_status)
				this.o_price.push(this.res[index].o_price)
				this.group_number.push(this.res[index].group_number)
				this.width.push(this.res[index].price.length)
				this.itemtype=this.res
				};
			}, 1000)
		},

		methods: {
			//显示全部数据
			showAll(){
				this.itemtype=this.res
				document.querySelector(".project .projectContent").style.display="block"
			},
			//分类小数据
			getData1() {
				let url = '../static/data/data1.json'
				axios.get(url).then(data => {
					this.data1 = data.data.data
				}, err => {
					console.log('err:', err)
				})
			},
			//整条大数据
			getData() {
				let url = '../static/data/data.json'
				axios.get(url).then(data => {
					this.res = data.data.data
				}, err => {
					console.log('err:', err)
				})
			},
			//点击分类
			type(event) {
				//project页面显示隐藏
				document.querySelector(".project .projectContent").style.display="block"
				console.log("1111",document.querySelectorAll("select")[1].value)

				//循环小数据得到本条数据id
				this.itemtype=[]
				var tid
				for(let index in this.data1) {
					if(this.data1[index].name == event.target.value) {
						tid = this.data1[index].id
						break;
						console.log("----",tid)
						console.log("----======",this.data1[index].name)
					}
				}						
				//循环大数据判读一样的去除这条数据进行渲染
				for(let index2 in this.res) {
							if(this.res[index2].cid == tid ||event.target.value=="类别") {
								this.itemtype.push(this.res[index2])
							}else{
								document.querySelector(".project .projectContent").style.display="none"
							}
						}
							if (this.itemtype.length==0) {
									Toast('暂时没有数据，请您浏览其他信息');
									}
				document.querySelectorAll("select")[1].value="方式"
							
			},
			//服务方式分类
			stype(){
//			   	
				    console.log("111",this.itemtype)
//				    
//							if (this.value2=="到店服务") {
//								this.itemtype=this.sitemtype2
//							}else if(this.value2=="上门服务"){
//								this.itemtype=this.sitemtype1
//							}else{
//								this.itemtype=this.res
//							}
//						if (this.itemtype.length==0) {
//									Toast('暂时没有数据，请您浏览其他信息');
//						}
						
					if (this.itemtype.length==0) {
						console.log('this.data1',this.data1)
							this.itemtype=[]
							var tid
							for(let index in this.data1) {
								if(this.data1[index].name == document.querySelectorAll("select")[0].value) {
									tid = this.data1[index].id
									break;
									console.log("----",tid)
									console.log("----======",this.data1[index].name)
								}
							}						
							//循环大数据判读一样的去除这条数据进行渲染
							for(let index2 in this.res) {
										if(this.res[index2].cid == tid || document.querySelectorAll("select")[0].value=="类别") {
											this.itemtype.push(this.res[index2])
										}else{
											document.querySelector(".project .projectContent").style.display="none"
										}
									}
										
//							Toast('暂时没有数据，请您浏览其他信息');
						}	
						
						var aa =[]
						for(let index in this.itemtype){
							if (this.value2=="到店服务") {
								if(this.itemtype[index].shop == 1){
									aa.push(this.itemtype[index])
								}
							}else if(this.value2=="上门服务"){
								if(this.itemtype[index].home==1){
									aa.push(this.itemtype[index])
								}
							}
						}
						
						this.itemtype=aa
//						console.log(this.itemtype)
						if (this.itemtype.length==0) {
							Toast('暂时没有数据，请您浏览其他信息');
						}	
			},
			//上门服务
			stype1(){
//		  this.sitemtype1=[]
				console.log("stype1",this.res)
		   		for(let index2 in this.res){
                       if(this.res[index2].home==1) {
                       	   	this.sitemtype1.push(this.res[index2])
                       }
									}
			},
			//到店服务
			stype2(){
		    		for(let index2 in this.res){
                       if(this.res[index2].shop==1) {
                       	   	this.sitemtype2.push(this.res[index2])
                       }
									}
			},
			//切换浏览模式
			fn1() {
				document.querySelector(".composing1").style.cssText = 'background:black;display:none'
				document.querySelector(".composing2").style.cssText = 'display:block;'
				document.querySelector(".project2").style.cssText = 'display:block;'
				document.querySelector(".project1").style.cssText = 'display:none;'

			},
			fn2() {
				document.querySelector(".composing1").style.cssText = 'display:block;'
				document.querySelector(".composing2").style.cssText = 'background:black;display:none'
				document.querySelector(".project1").style.cssText = 'display:block;'
				document.querySelector(".project2").style.cssText = 'display:none;'
				document.querySelector(".project1").style.cssText = 'display:flex;'
			},
			//详情
			showView(id) {
			console.log("id", id)
			this.$router.push("/id/" + id)
			},
//			//prompt提示框
//			prompt(){
//				if (this.itemtype.length==0) {
//					Toast('暂时没有数据，请您浏览其他信息');
//					}
//				}
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	
	li {
		list-style: none;
	}
	/*灰色*/
	.null {
		width: 100%;
		background: #DBDBDB;
		height: 3px;
		position: fixed;
		top: 32px;
		left: 0;
		z-index: 1000;
	}
	.allBtn{
	margin-top: 3px;
	}
	.composing1 {
		width: 20px;
		height: 20px;
		background: red;
	}
	
	.composing2 {
		width: 20px;
		height: 20px;
		background: blue;
		display: none;
	}
	
	#nav {
		box-sizing: border-box;
		width: 100%;
		height: 32px;
		display: flex;
		padding: 5px 6%;
		justify-content: space-around;
		background: white;
		margin: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
	}
	
	select {
		width: 100px !important;
		text-align: center;
		outline: none;
		border: none;
		background: white;
	}
	
	option {
		display: block !important;
		width: 90px;
		text-align: center;
	}
	/*分类显示*/
	.typeContent 	.null{
		width: 100%;
		background: #DBDBDB;
		height: 3px;
		margin-top: 0px;
	}
	.typeContent {
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-around;
		background: white;
		margin: auto;
		position: absolute;
		top: 0px;
		padding-top: 30px;
		left: 0;
		z-index: 1000;
		/*display: none;*/
		/*opacity: 0.4;*/
	}
	

	
	
</style>