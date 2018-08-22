<template>
	<div class="bg">
		<div class="bg_title">
			<div class="info">
				<label for="">项目名称</label>
				<input type="text" readonly value="环保楼"/>
			</div>
			<div class="info">
				<label for="">部门</label>
				<input type="text" value="技术部"/>
			</div>
			<div class="info">
				<label for="">项目周期</label>
				<input type="text" value="2018/08/14-2018/10/10"/>
			</div>			
			<div class="info">
				<label for="">参与人员</label>
				<!--<span>请选择(必填)</span>
				<img src="../../assets/arrow-right.png" alt="" />-->
			</div>
			<div class="info_tx">
					<ul>
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>													
					</ul>
			</div>
			<!--项目进度progress-->
			<div class="progress">
				<div class="pro_info">
					<span>项目进度</span>
					<img src="../../assets/addition.png"/>
					<div class="pro_inner">
						<div class="pro_left">
							<img src="../../assets/tx.png"/>
							<p>前端-小丁</p>		
						</div>
						<div class="pro_right">
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
						</div>
					</div>
					<div class="pro_inner">
						<div class="pro_left">
							<img src="../../assets/tx.png"/>
							<p>前端-小丁</p>		
						</div>
						<div class="pro_right">
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
							<span>2018-08-14 10:50</span>
							<p>页面编写完成3/5，预计两天之后完成</p>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'add_project',
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
    display: inline-block;
    padding: 0.08rem 0.25rem;
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
.bg_title{
	padding-top: .29rem;
}
.info{
	height: 0.8rem;
	width: 100%;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;
}
.info label{
	width:1.5rem;
	margin-left: 0.3rem;
	display:inline-block;
	font-size: 0.28rem;	
}
.info input{
	width: 4.5rem;
	height: 0.5rem;
	border: none;
	outline: none;
	margin-left: 0.3rem;
	vertical-align: middle;
}
.info span{
	margin-left: 3.5rem;
	font-size: 0.28rem;
	color: #2b2a2a;
}
.info img{
	width: 0.3rem;
	height: 0.3rem;
	vertical-align: middle;
}
.info_tx{
     border-bottom: 1px solid #eaedee;
}
.info_tx ul{
	width: 100%;
}
.info_tx li{
	width: 0.75rem;
}
.info_tx img{
	width:  0.75rem;
}
/*项目进度*/
.pro_info{
	padding: 0.25rem;
}
.pro_info span{
	color: #7c7c7d;
	font-size: 0.28rem;
}
.pro_info img{
	width: 0.28rem;
	height: 0.28rem;
	vertical-align: middle;
}
.pro_inner{
	width: 100%;
	height: auto;
	overflow: hidden;
	background-color: #E2E4E6;
	margin-top: 0.25rem;
}
.pro_left {
	text-align: center;
	width: 1.5rem;
	float:left;
	margin-top: 0.35rem;
}
.pro_left img{
	width:  0.75rem;
	height: auto;
}
.pro_left p{
	font-size: 0.28rem;
	color:#2B2A2A;
	margin: 0.28rem auto;
}
.pro_right{
	width: 5.5rem;
	float: right;
    margin-bottom: 0.25rem;	
}
.pro_right span{
	font-size: 0.28rem;
	color: #7d7c7c;
}
.pro_right p{
	font-size: 0.32rem;
	color:#2B2A2A;
}
</style>
