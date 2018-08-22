<template>
	<div class="bg">
		<div class="bg_color">
				<router-link class="info" :to="{name:'detail_project'}" tag="div">
					<div class="inner">
						<span>王小九</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</router-link>
				<div class="info">
					<div class="inner">
						<span>王小九</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>
				<div class="info">
					<div class="inner">
						<span>王小九</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>
				<div class="info">
					<div class="inner">
						<span>王小九</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>				
		</div>
	</div>
</template>
<script>
export default {
  name: 'has_project',
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
	padding-top: .15rem;
}
.info{
	background-color: #fff;
	margin-top: .15rem;
}
.inner span:nth-child(1){
	margin: .15rem;
	display: inline-block;	
	font-size: .28rem;
	color: #2b2b2a;
}
/*.inner span:nth-child(2){
	font-size: .28rem;
	color: #88888b;	
}*/
.inner span:nth-child(2){
	position: absolute;
	right: 0;
    margin: 0.15rem 0.35rem 0.15rem 0.15rem;
	font-size: .28rem;
	color: #88888b;	    	
}
.inner span:nth-child(4){
	margin: .15rem .15rem 0 .15rem;
	display: inline-block;		
	font-size: .28rem;
	color: #88888b;		
}
.inner span:nth-child(5){
	position: absolute;
	right: 0;
    margin: 0.15rem 0.35rem 0.15rem 0.15rem;
	font-size: .28rem;
	color: #88888b;	    	
}
</style>
