<template>
  <div id="app">
  	<!--<!--导航栏-->
  	<!--<top></top>-->
  	<!--项目内容主体部分-->
  	<router-view  :data="data" :v-if="data"></router-view>
  	 <!--<router-link tag="div" to="/top">
			</router-link>-->
  	 <!--<router-link tag="div" to="/project">
			</router-link>-->
			
  </div>
</template>

<script>
import axios from 'axios'
//import top from '@/components/top/top'
//this.axios.defaults.baseURL = '/api'
	
export default {
  name: 'App',
  data(){
  	return{
  		data:[]
  	}
  },
  created(){
  	console.log("3")
  	this.getData()
  },
//components:{
//	top
//},
  methods:{
		getData(){
				let url='../static/data/data.json'
				axios.get(url).then(data=>{
//					console.log('data:',data.data.data)
					this.data=data.data
					console.log('data:',data.data.data)
				},err=>{
					console.log('err:', err)
				})
			},
//			fn1(){
//		  document.querySelector(".composing1").style.cssText='background:black;display:none'
//		  document.querySelector(".composing2").style.cssText='display:block;'
//			document.querySelector(".project2").style.cssText='display:block;'
//			document.querySelector(".project1").style.cssText='display:none;'
//		  
//		 },
//			fn2(){
//		   document.querySelector(".composing1").style.cssText='display:block;'
//		   document.querySelector(".composing2").style.cssText='background:black;display:none'
//		   document.querySelector(".project1").style.cssText='display:block;'
//		   document.querySelector(".project2").style.cssText='display:none;'
//		   document.querySelector(".project1").style.cssText='display:flex;'
//		  }
//
// getData () {
//   		var url ="http://www.ligentshop.com/app/index.php?i=21&t=0&v=1.0.0&from=wxapp&c=entry&a=wxapp&do=service&state=we7sid-50e2bc6420ad031af9a6597861bd5fbf&m=xc_beauty&sign=0cad00624ea6297f5778ad06b55617dd&op=list&page=1&pagesize=20"
//       axios.get('/api/app/index.php?i=21&t=0&v=1.0.0&from=wxapp&c=entry&a=wxapp&do=service&state=we7sid-50e2bc6420ad031af9a6597861bd5fbf&m=xc_beauty&sign=0cad00624ea6297f5778ad06b55617dd&op=list&page=1&pagesize=20')
////      axios.get(url)
//      .then((response) => {
//            console.log("1111111111111111111111",response.data)
////            this.data = response.data  // 这里要强调一下这个this 箭头函数指的是它的父级也就是vue实例  然后不用箭头函数的话 this是一个undefined 无法.movieArr来给他赋值  这里要注意一下 我被坑了半天 希望小伙伴不要被坑
//      })
//     }
  }
  
}




</script>

<style>

	*{
		padding: 0;
		margin: 0;
	}
li{
	list-style: none;
}
.composing1{
	width: 20px;
	height: 20px;
	background: red;
	z-index: 1000;
}
.composing2{
	width: 20px;
	height: 20px;
	background: blue;
	z-index: 1000;
	display: none;
}
#nav{
	box-sizing: border-box;
	width: 100%;
	padding: 9px 0%;
	display: flex;
  justify-content: space-around;
  background: white;
  margin: auto;
  position:fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
select{
	display: inline-block;
	width: 100px ;
	text-align: center;
}
option{
	display:block;
	width: 90px;
	height: 20px;
	text-align: center;
}
#app {
	/*padding: 5px 0px;*/
	background: #dbdbdb;
}
</style>
