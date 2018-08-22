<template>
	<div class="bg">
		<div class="bg_color">
			<div class="info">
				<label for="">姓名</label>
				<input type="text" class="" placeholder="请输入姓名(必填)"/>
			</div>
			<div class="info">
				<label for="">性别</label>
				<input type="text" class="" placeholder="请输入性别(必填)"/>
			</div>
			<div class="info">
				<label for="">联系方式</label>
				<input type="text" class="" placeholder="请输入联系方式(必填)"/>
			</div>
			<div class="info">
				<label for="">地址</label>
				<input type="text" class="" placeholder="请输入地址(必填)"/>
			</div>
			<div class="info">
				<label for="">单位名称</label>
				<input type="text" class="" placeholder="请输入单位名称(必填)"/>
			</div>
			<div class="info">
				<label for="">项目类型</label>
				<input type="text" class="" placeholder="请输入项目类型(必填)"/>
			</div>			
			<button class="btn">保存</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'customer',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
 	width:100%;         
}
ul {
    display: table;
    width: 100%;
}
ul li {
    text-align: center;
    font-size: 16px;
    display: table-cell;
    padding: 8px 12px;
    cursor: pointer;
}    
.router-link-active{
	color:#1296db;
}
.bg{
	background-color: #F6FBFA;
	height: 100vh;
	width: 100%;
}
.bg_color{
	padding-top: .29rem;
}
.info{
	width:100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;	
}
.info label{
	width: 1.2rem;
	font-size: 0.28rem;
	color: #2b2a2a;
	padding-left: 0.35rem;
    display: inline-block;	
}
.info input{
	width: 5rem;
	height: 0.8rem;
	padding-left: 0.5rem;
	font-size: 0.28rem;
	border: none;
	outline: none;
}
.btn{
	width: 6rem;
	height: 0.75rem;
	background-color: #2ba9ee;
	margin-left: 0.75rem;
	color: #fff;
	font-size: .32rem;
	margin-top: 1.25rem;
	border: none;
	outline: none;
	border-radius: 0.15rem;
}  
</style>
