<template>
	<div class="bg_color">
		<div class="content_head">
			<div class="bg">
				<div class="center">
					<!--<img src="../../assets/ic_icon.png" alt="" />-->
					<img :src="img" alt="" />
					<p>{{name}}</p>
				</div>
			</div>
			<div class="body_margin">
				<router-link class="info" tag="div" :to="{name:'password',params: { name: name ,img: img}}">
					<img src="../../assets/ture_key.png" alt="" />
					<span>修改密码</span>
					<img src="../../assets/arrow-right.png" alt="" />
				</router-link>
				<router-link class="info" tag="div" :to="{name:'info'}">
					<img src="../../assets/ture_key.png" alt="" />
					<span>完善资料</span>
					<img src="../../assets/arrow-right.png" alt="" />
				</router-link>
				<div class="info">
					<img src="../../assets/ture_key.png" alt="" />
					<span>注销账号</span>
					<img src="../../assets/arrow-right.png" alt="" />
				</div>
			</div>
		</div>
		<tab></tab>
	</div>
</template>

<script>
	//export default {
	//name: 'my',
	//data () {
	//  return {
	//    
	//  }
	//},
	// components: { 
	//tab: tab ,
	//},
	//}
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	import tab from '@/components/tab/tab'
	import Qs from 'qs'
	export default {
		name: 'password',
		data() {
			return {
				user_id: '',
				name:'',
				img:''
			}
		},
		components: {
			tab: tab,
		},
		mounted: function() {
			const self=this;
			console.log(4155)
			let data = {
				"user_id": self.GLOBAL.user_id,
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL+'Person/index',
					data: Qs.stringify(data)
				}).then(function(response) {
					console.log(response);
					if(response.data.code == '1') {
						self.name=response.data.data.name;
						self.img=response.data.data.img;						
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
	.tabs {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		box-shadow: 0 2px 4px #000;
		width: 100%;
	}
	
	.tabs img {}
	
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
	
	.router-link-active {
		color: #1296db;
	}
	
	.bg_color {
		background-color: #eee;
	}
	
	.bg {
		background: url(../../../src/assets/bg_personage.png) no-repeat;
		width: 100%;
		height: 3.4rem;
	}
	
	.center {
		text-align: center;
	}
	
	.center img {
		width: 1.5rem;
		height: 1.5rem;
		border: 4px solid #fff;
		border-radius: 50%;
		margin-top: .45rem;
	}
	
	.center p {
		color: #f7fafb;
		font-size: 0.3rem;
	}
	
	.body_margin {
		margin-top: 0.25rem;
	}
	
	.info {
		width: 100%;
		border-bottom: 1px solid #d2d2d2;
		height: 1.05rem;
		background-color: #fff;
		line-height: 1.05rem;
	}
	
	.info img {
		width: 0.3rem;
		height: 0.375rem;
		position: relative;
	}
	
	.info :nth-child(1) {
		text-align: left;
		display: inline-block;
		padding-top: .35rem;
		padding-left: 0.35rem;
	}
	
	.info :nth-child(2) {
		text-align: left;
		padding-left: .15rem;
		position: absolute;
	}
	
	.info :nth-child(3) {
		text-align: right;
		padding-right: .15rem;
		padding-top: .35rem;
		padding-left: 6.2rem;
	}
</style>