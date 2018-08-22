<template>
	<div class="bg">
		<router-link v-for="arr in res" :key="arr" class="info" tag="div" :to="{name:'m_detail',params: { id: arr.id}}">
			<div class="inner">
				<span>{{arr.title}}</span>
				<span>{{arr.phone}}</span>
				<span>{{arr.time}}</span>
			</div>
			<div class="message">
				<span>{{arr.content}}</span>
			</div>			
		</router-link>	
		<router-link class="foot" tag="div" :to="{name:'m_edit'}">
			<img src="../../assets/edit.png" alt="" />
			<span>发布留言</span>
		</router-link>		
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	import tab from '@/components/tab/tab'
	import Qs from 'qs'
	export default {
		name: 'message',
		data() {
			return {
				user_id: '',
				title: '',
				phone: '',
				time: '',
				content: '',				
				res:[],
				id:''
			}
		},
		components: {
			tab: tab,
		},
		mounted: function() {
			const self = this;
			let data = {
				"user_id": self.GLOBAL.user_id,
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'message/message_list',
					data: Qs.stringify(data)
			}).then(function(response) {
					if(response.data.code == '1') {
					self.res = response.data.data;  
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
	padding-top: 0.29rem;	
}
.inner{
	background-color: #FFFFFF;
	height: 0.8rem;
	width: 100%;
	line-height: 0.8rem;
	border-bottom: 2px solid #eceff0;
}
.inner span:nth-child(1){
	font-size: 0.34rem;
	color: #2b2b2a;
	display: inline-block;
	margin-left: 0.25rem;
}
.inner span:nth-child(2){
	font-size: 0.34rem;
	color: #393938;
	display: inline-block;
	margin-left: 0.25rem;	
}
.inner span:nth-child(3){
	font-size: 0.34rem;
	color: #808083;
	display: inline-block;
	right: 0.35rem;
	position: absolute;	
}
.message{
	height: 0.6rem;
	margin-left: 0.25rem;	
	line-height: 0.6rem;
	background-color: #fff;
	border-bottom: 2px solid #eceff0;	
}
.message span{
	color: #2b2b2a;
	font-size: 0.28rem;
}
	.foot {
		width: 100%;
		height: 1rem;
		background-color: #fff;
		line-height: 1rem;
		border-top: 1px solid #d5dcdf;
		position: fixed;
		bottom: 0;
		text-align: center;
	}
	
	.foot img {
		width: 0.34rem;
		height: 0.34rem;
		vertical-align: middle;
	}
	
	.foot span {
		font-size: 0.34rem;
		color: #139aee;
	}
</style>
