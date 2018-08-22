<template>
	<div class="bg">
		<div class="inner">
		<router-link v-for="arr in res" :key="arr" class="info" tag="div" :to="{ name: 'detail_leave',params:{ id : arr.id }}">	 
			<div class="info_left">
				<img :src="arr.img" style="width: 1.2rem;;" />
				<p>{{arr.name}}</p>
			</div>
			<div class="info_right">
				<span>{{arr.type}}</span>
				<span>{{arr.create_time}}</span>
				<p>请假事由：{{arr.reason}}</p>
				<p>开始时间：{{arr.start_time}}</p>
				<p>结束时间：{{arr.end_time}}</p>
				<p>{{arr.check}}</p>
			</div>			
		</router-link>			
		</div>
		<router-link class="foot" tag="div" :to="{name:'need_leave'}">
			<img src="../../assets/edit.png" alt="" />
			<span>我要请假</span>		
		</router-link>	
	</div>
</template>
<script>
//export default {
//name: 'leave',
//data () {
//  return {   
//  }
//}
//}
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	import Qs from 'qs'
	export default {
		name: 'leave',
		data() {
			return {
				user_id: '',
				name: '',
				img: '',
				res:[],
				id:'',
				statu:'',
				arr:[],
				examine:'',
			}
		},
		mounted: function() {
			const self = this;
			let data = {
				"user_id": self.GLOBAL.user_id,
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Leave/leave_list',
					data: Qs.stringify(data)
			}).then(function(response) {
					if(response.data.code == '1') {
					self.res = response.data.data;  
					
					for(let i=0;i<self.res.length;i++ ){
						if(self.res[i].status== 1 && self.res[i].m_status == 1 && self.res[i].a_status == 1){
							self.examine="已通过"
							self.res[i].check=self.examine;
						}	
						else if(self.res[i].status== 2 || self.res[i].m_status == 2 || self.res[i].a_status == 2){
							self.examine="不通过"
							self.res[i].check=self.examine;
						}else{
							self.examine="待审核"
							self.res[i].check=self.examine;
						}						
					}
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		methods: {}
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
.info{
	margin-top: 0.2rem;
	background-color: #FFFFFF;	
	overflow: hidden;
	border-bottom: 2px solid #fefefe;
}
.inner{
	padding-top: 0.09rem;	
}
.info_left{
	float: left;
	width: 1.2rem;
	height: auto;
	text-align: center;
	padding: 0.2rem;
}
.info_right span:nth-child(1){
	font-size: 0.34rem;
	color: #2b2b2a;
	display: inline-block;
}
.info_right span:nth-child(2){
	font-size: 0.34rem;
	color: #808083;
	display: inline-block;
	position: absolute;
	right: 0.35rem;
}
.info_right p:nth-child(3),.info_right p:nth-child(4),.info_right p:nth-child(5){
	font-size: 0.28rem;
	color: #808083;
	padding-top: 0.1rem;
}
.info_right p:nth-child(3){
    width: 4.5rem;
	white-space:nowrap;
	text-overflow:ellipsis; 
	overflow:hidden;
}
.info_right p:nth-child(6){
	font-size: 0.34rem;
	color: #02ab71;	
    margin-left: 1.58rem;	
}
.pass{
	color: #e41f10;
}
.passing{
	color: #fa5200;
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
