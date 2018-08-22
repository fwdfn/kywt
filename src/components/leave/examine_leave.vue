<template>
	<div class="bg">
		<div class="inner">
			<div class="info">
				<label for="">请假人</label>
				<img src="../../assets/tx.png" alt="" />
				<span>王小九</span>
			</div>
			<div class="info">
				<label for="">类型</label>
				<span>病假</span>
			</div>	
			<div class="info">
				<label for="">开始时间</label>
				<span>2017-10-12 10:20</span>
			</div>	
			<div class="info">
				<label for="">结束时间</label>
				<span>2018-10-12 10:20</span>
			</div>	
			<div class="info">
				<label for="">请假事由</label>
				<span>感冒发烧</span>
			</div>
			<div class="info">
				<label for="">所在部门</label>
				<span>七年级教学部</span>
			</div>	
			<div class="info">
				<label for="">审批人</label>
				<img src="../../assets/tx.png" alt="" />
				<span>王校长</span>
			</div>	
			<div class="info_info">
				<label for="">审核意见</label>
				<textarea type="" name="" id="" value=""></textarea>
			</div>	
			<div class="foot">
				<ul>
					<li>不批准</li>
					<li class="left_hr">批准</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'examine_leave',
  data () {
    return {   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active {
	color: #1296db;
}
.bg{
	background-color: #F7fafb;
	height: 100vh;
	width: 100%;
}
.inner{
	padding-top: 0.29rem;	
}
.info{
	height: 0.8rem;
	width: 100%;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaefee;
}
.info label{
	width:1.5rem;
	margin-left: 0.3rem;
	font-size: 0.32rem;
	display:inline-block;
	color: #7d7d7e;	
}
.info img{
	width: 0.65rem;
	vertical-align: middle;
}
.info span{
	display: inline-block;
	margin-left: 0.25rem;
	font-size: 0.32rem;
	color: #2a2a2a;
}
.info_info{
	height: 2.8rem;
	width: 100%;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;	
}
.info_info label{
	width:1.5rem;
	margin-left: 0.3rem;
	font-size: 0.28rem;
	display:inline-block;
	position: absolute;	
}
.info_info textarea{	
	outline: none;
	border: none;
	position: absolute;
	margin-left: 2.2rem;
    margin-top: 0.2rem;
    height: 2.5rem;
    width: 5rem;
}
.foot{
	position: fixed;
	bottom: 0;
	height: 1rem;
	line-height: 1rem;
	width: 100%;
	background: #fff;
	border-top: 1px solid #bebebe;
}
.foot ul li{
	list-style: none;
	display: inline-block;
	width: 3.68rem;;
	text-align: center;	
    vertical-align: middle;	
    font-size: .32rem;
}
.foot li:nth-child(1){
	background-color: #fff;
	color: #868686;
	border: none;	
} 
.foot li:nth-child(2){
	background-color: #1fa2ed;
	color: #fff;
	border: none;
} 
</style>
