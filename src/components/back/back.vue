<template>
  	
  	<div class="back" @click="back()">
	  	<span><</span>
  </div>
</template>

<script>
export default {
  name: 'back',
  data () {
    return {
      msg: 'back'
    }
  },
	 methods:{
  	back(){
  		console.log("返回")
  		history.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
