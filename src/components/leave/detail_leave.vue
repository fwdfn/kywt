<template>
	<div class="bg">
		<div class="inner">
			<div class="info">
				<label for="">请假人</label>
				<img :src="res.img" alt="" />
				<span>{{res.name}}</span>
			</div>
			<div class="info">
				<label for="">类型</label>
				<span>{{res.type}}</span>
			</div>	
			<div class="info">
				<label for="">开始时间</label>
				<span>{{res.start_time}}</span>
			</div>	
			<div class="info">
				<label for="">结束时间</label>
				<span>{{res.end_time}}</span>
			</div>	
			<div class="info">
				<label for="">请假事由</label>
				<span>{{res.reason}}</span>
			</div>
			<!--<div class="info">
				<label for="">所在部门</label>
				<span>七年级教学部</span>
			</div>	-->
			<!--<div class="info">
				<label for="">审批人</label>
				<img src="../../assets/tx.png" alt="" />
				<span>王校长</span>
			</div>	-->
			<div class="info">
				<label for="">审核意见</label>
				<span>{{res.check}}</span>
			</div>	
			<!--<div class="position">
				<img src="../../assets/pass.png" alt="" />
			</div>-->
		</div>
	</div>
</template>
<script>
//export default {
//name: 'detail_leave',
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
		name: 'detail_leave',
		data() {
			return {
				user_id: '',
				name: '',
				img: '',
				id:'',
				res:[],
				arr:[],
				examine:'',				
			}
		},
		mounted: function() {
			const self = this;
			let data = {
				"id": self.$route.params.id,
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Leave/leave_detail',
					data: Qs.stringify(data)
			}).then(function(response) {
					if(response.data.code == '1') {
					self.res = response.data.data;  
						if(self.res.status== 1 && self.res.m_status == 1 && self.res.a_status == 1){
							self.examine="已通过"
							self.res.check=self.examine;
						}	
						else if(self.res.status== 2 || self.res.m_status == 2 || self.res.a_status == 2){
							self.examine="不通过"
							self.res.check=self.examine;
						}else{
							self.examine="待审核"
							self.res.check=self.examine;
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
.position{
	position: absolute;
    top: 0px;
    right: 0.35rem;
}
</style>
