<template>
	<div class="bg">
		<div class="bg_color">
			<div class="info">
				<input type="text" class=""placeholder="请输入标题(必填)"/>
			</div>	
			<div class="inner">
				<textarea name="" rows="" placeholder="汇报内容(必填)"cols=""></textarea>
			</div>		
			<div class="info_">
				<span>所在部门</span>
				<span>请选择(必填)</span>
				<img src="../../assets/arrow-right.png" alt="" />
			</div>	
			<div class="info_">
				<span>接收人</span>
				<span>请选择(必填)</span>
				<img src="../../assets/arrow-right.png" alt="" />
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
					</ul>
			</div>
			<button class="btn">提交</button>
		</div>
	</div>
</template>
<script>
export default {
  name: 'edit_received',
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
 	border-bottom: 1px solid #ecf1f0;    	     
}
ul {
    display: table;
    width: 100%;
}
ul li {
    text-align: center;
    font-size: 16px;
    display: inline-block;
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

.info input{
	width: 100%;
	height: 0.8rem;
	font-size: 0.28rem;
	border: none;
	outline: none;
	text-indent: .25rem;	
}
.inner{
	margin-top: 0.29rem;
	width:100%;
	height: 3.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;	
}
.inner textarea{
	width: 100%;
	height: 3.8rem;
	border: none;
	outline: none;
	text-indent: .25rem;	
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
.info_{
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: #FFFFFF;
	margin-top: 0.29rem;
}
.info_ span:nth-child(1){
	padding-left: 0.35rem;
	font-size: .3rem;
	color: #393838;
	float:left;
}
.info_ span:nth-child(2){
	float:right;
	font-size: .3rem;
	color: #393838;	
	margin-right: 0.75rem;
}
.info_ img:nth-child(3){
	width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.22rem;
	display: inline-block;
    position: absolute;
    right: 0.4rem;
} 
.info_tx{
	margin-top: 0.29rem;
	background-color: #fff;
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
</style>
