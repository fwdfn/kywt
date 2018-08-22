<template>
	<div class="bg">
		<report_tab></report_tab>
		<div class="bg_color">
				<router-link :to="{name:'detail_received'}" class="info" tag="div" >
					<div class="pro_right">
						<img src="../../assets/tx.png" alt="" />
						<p>王小九</p>
					</div>
					<div class="inner">
						<span>【标题】2017年年度计划</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</router-link>
				<div class="info">
					<div class="pro_right">
						<img src="../../assets/tx.png" alt="" />
						<p>王小九</p>
					</div>
					<div class="inner">
						<span>【标题】2017年年度计划</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>
				<div class="info">
					<div class="pro_right">
						<img src="../../assets/tx.png" alt="" />
						<p>王小九</p>
					</div>
					<div class="inner">
						<span>【标题】2017年年度计划</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>
				<div class="info">
					<div class="pro_right">
						<img src="../../assets/tx.png" alt="" />
						<p>王小九</p>
					</div>
					<div class="inner">
						<span>【标题】2017年年度计划</span>
						<span>2016年10月10号</span>
						<br/>
						<span>凯艺维通有限公司</span>
						<span>15:30</span>
					</div>
				</div>	
		<router-link class="foot" tag="div" :to="{name:'edit_received'}">
			<img src="../../assets/edit.png" alt="" />
			<span>我要汇报</span>		
		</router-link>		
		</div>
	</div>
</template>
<script>
import report_tab from '@/components/report/report_tab'
export default {
  name: 'received',
  data () {
    return {   
    }
  },
  components: { 
  report_tab: report_tab,
  }, 
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
	padding-top: .75rem;
}
.info{
	background-color: #fff;
	margin-top: .15rem;
    overflow: hidden;	
}
.inner span:nth-child(1){
	margin: .15rem;
	display: inline-block;	
	font-size: .28rem;
	color: #2b2b2a;
}

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
.pro_right{
	float: left;
    text-align: center;
    padding: 0.15rem;	
}
.pro_right img{
	width: 0.45rem;	
}
.pro_right p{
	font-size: 0.28rem;
	color: #7b7b7b;
}
.inner{
	float: right;
	width: 6.3rem;
}
.foot{
	position: fixed;
	width: 100%;
	height: 1rem;
	bottom: 0;
	text-align: center;
	vertical-align: middle;
	border-top: 1px solid #bfc2c2;
	line-height: 1rem;
}
.foot img{
	vertical-align: middle;
	width: .36rem;
	height: .36rem;	
}
.foot span{
	color: #119bec;
	font-size: 0.36rem;
}
</style>
