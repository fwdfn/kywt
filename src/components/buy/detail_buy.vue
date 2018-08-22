<template>
	<div class="bg">
		<div class="inner">
			<div class="info">
				<label for="">申请人</label>
				<img src="../../assets/tx.png" alt="" />
				<span>王小九</span>
			</div>
			<div class="info">
				<label for="">名称</label>
				<span>文件夹</span>
			</div>	
			<div class="info">
				<label for="">规格</label>
				<span>常规</span>
			</div>	
			<div class="info">
				<label for="">单位</label>
				<span>本</span>
			</div>	
			<div class="info">
				<label for="">数量</label>
				<span>2</span>
			</div>
			<div class="info">
				<label for="">申购事由</label>
				<span>内部使用</span>
			</div>
			<div class="info">
				<label for="">所在部门</label>
				<span>销售部</span>
			</div>	
			<!--<div class="info">
				<label for="">审批人</label>
				<img src="../../assets/tx.png" alt="" />
				<span>王校长</span>
			</div>	
			<div class="info">
				<label for="">审核意见</label>
				<span>同意</span>
			</div>	
			<div class="position">
				<img src="../../assets/pass.png" alt="" />
			</div>-->
		</div>
	</div>
</template>
<script>
//export default {
//name: 'detail_buy',
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
		name: 'detail_buy',
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
					url: self.GLOBAL.baseURL + 'Buy/buy_detail',
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
