<template>
<div class="bg_color">
		<div class="content_head">
				<div class="body_margin">
					<div class="info">
						<label for="">手机号</label>
						<input type="text" placeholder="请输入你的手机号"/>
					</div>
					<div class="info">
						<label for="">所在部门</label>
						<input type="text" placeholder="所在部门"/>
					</div>
					<div class="info">
						<label for="">职位</label>
						<input type="text" placeholder="职位"/>
					</div>					
				</div>
		</div>
		<button>确认</button>
</div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-input-placeholder{
	font-size: 0.30rem;
}   
:-moz-placeholder{
	font-size: 0.30rem;	
}           
::-moz-placeholder{
	font-size: 0.3rem;		
}          
:-ms-input-placeholder{
	font-size: 0.5rem;		
}		
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
.body_margin{
	    padding: 10px 0 0 0;
}
.bg_color{
	background-color: #F7FAFB;
	height:100vh;
	width: 100vw;
}
.info{
	width: 100%;
	border-bottom:1px solid #d2d2d2;
	height: 1.05rem;
	background-color: #fff;
	line-height: 1.05rem;
}
.info img{
	width: 0.3rem;
	height: 0.375rem;
	position: relative;
}
.info :nth-child(1){
	text-align: left;
	display: inline-block;
    padding-left: .3rem;	
	width: 1.35rem;    
}
.info :nth-child(2){
	text-align: left;
	padding-left: .35rem;
	position: absolute;	
	height:1.05rem;
	width: 5.5rem;
	outline: none;
	border: none;
}
button{
	width: 6rem;
	height: 0.8rem;
	background-color: #1c9fed;
	color: #fff;
	margin-left: 0.75rem;
	margin-top: 0.5rem;
	outline: none;
	border: none;
	border-radius: 0.1rem;
}
</style>
