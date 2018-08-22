<template>
	<div class="bg">
		<div class="info">
			<router-link class="center" :to="{name:'n_detail'}"tag="div">
				<img src="../../assets/notice.png"/>
				<p>公告</p>				
			</router-link>
		</div>
		<div class="inner">
			<router-link class="center" :to="{name:'s_schedule'}"tag="div">
				<img src="../../assets/schedule.png"/>
				<p>日程安排</p>
			</router-link>		
		</div>
		<div class="inner">
			<router-link class="center" :to="{name:'customer'}"tag="div">	
				<img src="../../assets/add.png"/>
				<p>添加客户</p>
			</router-link>			
		</div>	
		<div class="info">
			<router-link class="center" :to="{name:'c_tab'}"tag="div">
				<img src="../../assets/client.png"/>
				<p>客户 </p>
			</router-link>			
		</div>	
		<div class="info">
			<router-link class="center" :to="{name:'add_project'}"tag="div">
				<img src="../../assets/project.png"/>
				<p>新建项目</p>
			</router-link>		
		</div>	
		<div class="inner">
			<router-link class="center" :to="{name:'has_project'}"tag="div">
				<img src="../../assets/plan.png"/>
				<p>项目进度</p>
			</router-link>			
		</div>
		<div class="inner">
			<router-link class="center" :to="{name:'report'}"tag="div">
				<img src="../../assets/report.png"/>
				<p>工作汇报</p>
			</router-link>			
		</div>	
		<div class="info">
			<router-link class="center" :to="{name:'message'}"tag="div">
				<img src="../../assets/leave_word.png"/>
				<p>客户留言</p>
			</router-link>		
		</div>	
		<div class="info">
			<router-link class="center" :to="{name:'leave'}"tag="div">
				<img src="../../assets/ask_for_leave.png"/>
				<p>请假</p>
			</router-link>		
		</div>	
		<div class="inner">
			<router-link class="center" :to="{name:'buy'}"tag="div">
				<img src="../../assets/declare.png"/>
				<p>申报 </p>
			</router-link>			
		</div>	
	</div>
</template>

<script>
export default {
  name: 'homepage',
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
.tabs img{
	
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
    width: 100%;
    height: 100vh;
    margin-bottom: 1.5rem;	
}
.info{
	background-color: #3fb4ed;
	width: 3.4rem;
	height: 2.5rem;
	float: left;
	margin-left: 0.24rem;
	margin-top: 0.1rem;
}
.inner{
	background-color: #209edc;
	width: 3.4rem;
	height: 2.5rem;
	float: left;
	margin-left: 0.24rem;
	margin-top: 0.1rem;		
}
.center{
	text-align: center;
}
.center img{
	width: 0.55rem;
	height: 0.55rem;
	margin-top: 0.7rem;
}
.center p{
	font-size: .36rem;
	color:#fff;
	margin-top: 0.3rem;
}
</style>
