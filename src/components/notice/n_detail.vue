<template>
	<div class="bg">
		<div>
			<router-link v-for="arr in res" :key="arr" class="info" tag="div" :to="{name:'n_edit',params: { id: arr.id}}">
				<div class="body">
					<p>{{arr.title}}</p>
					<div class="body_">
						<span></span>
						<span>{{new Date(arr.time*1000).toLocaleString()}}</span>
						<span>{{arr.number}}人已读</span>
					</div>
				</div>
				<div class="inner">
					<p>{{arr.content}}</p>
				</div>
			</router-link>
		</div>
		<router-link class="foot" tag="div" :to="{name:'release'}">
			<img src="../../assets/edit.png" alt="" />
			<span>发布公告</span>
		</router-link>
	</div>
</template>

<script>
//	export default {
//		name: 'n_detail',
//		data() {
//			return {
//
//			}
//		}
//	}
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	import tab from '@/components/tab/tab'
	import Qs from 'qs'
	export default {
		name: 'n_detail',
		data() {
			return {
				user_id: '',
				name: '',
				img: '',
				res:[]
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
					url: self.GLOBAL.baseURL + 'Notice/notice_list',
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
	
	.bg {
		background-color: #f6fbfa;
		width: 100%;
		height: 100vh;
		padding-bottom: 1.3rem;
	}
	
	.body {
		height: .9rem;
		width: 7rem;
		background-color: #fff;
		padding: 0.1rem .25rem;
		border-bottom: 1px solid #d5dcdf;
	}
	
	.body p {
		font-size: .3rem;
		color: #292929;
	}
	
	.info {
		padding-top: 0.2rem;
	}
	
	.body_ {
		margin-top: .1rem;
	}
	
	.body_ :nth-child(1),
	.body_ :nth-child(2) {
		font-size: .26rem;
		color: #818181;
	}
	
	.body_ :nth-child(3) {
		float: right;
		right: .35rem;
		color: #149af2;
		font-size: .26rem;
	}
	
	.inner {
		background-color: #fff;
		height: 0.9rem;
		width: 7.5rem;
		line-height: 0.9rem;
	}
	
	.inner p {
		font-size: 0.3rem;
		margin-left: 0.5rem;
		width: 5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
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