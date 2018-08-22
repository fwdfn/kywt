<template>
	<div class="bg">
		<c_tab></c_tab>
		<div class="bg_color">
				<router-link v-if="flag" v-for="arr in res" :key="arr" class="info" :to="{name:'c_detail',params: { id: arr.id }}" tag="div">
					<div class="inner">
						<span>{{arr.name}}</span>
						<span>{{arr.tel}}</span>
						<span>{{arr.day}}</span>
						<br/>
						<span>{{arr.company}}</span>
						<span>{{arr.address}}</span>
					</div>
				</router-link>	
				<div v-if=" flag == false" style="text-align: center;margin-top: 0.5rem;font-size: 0.28rem;">
					暂无数据
				</div>
		</div>
	</div>
</template>
<script>
import c_tab from '@/components/c_customer/c_tab'
//
//export default {
//name: 'nodeal',
//data () {
//  return {
//    
//  }
//},components: { 
//c_tab: c_tab ,
//},  
//}
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	import tab from '@/components/tab/tab'
	import Qs from 'qs'
	export default {
		name: 'nodeal',
		data() {
			return {
				user_id: '',
				status: '',
				res:[],
				id:'',
				flag:true
			}
		},
		components: {
  		c_tab: c_tab ,
		},
		mounted: function() {
			const self = this;
			let data = {
				"user_id": self.GLOBAL.user_id,
				"status": 1
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Client/client_list',
					data: Qs.stringify(data)
				}).then(function(response) {
					console.log(response);
					if(response.data.code == '1') {
					self.res = response.data.data;  
					}
					if(response.data.code == '0'){
						self.flag=false;
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
 	width:100%;         
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
	padding-top: .8rem;
}
.info{
	background-color: #fff;
	margin-top: .15rem;
}
.inner span:nth-child(1){
	margin: .15rem;
	display: inline-block;	
	font-size: .28rem;
	color: #2b2b2a;
}
.inner span:nth-child(2){
	font-size: .28rem;
	color: #88888b;	
}
.inner span:nth-child(3){
	position: absolute;
	right: 0;
    margin: 0.15rem 0.35rem 0.15rem 0.15rem;
	font-size: .28rem;
	color: #88888b;	    	
}
.inner span:nth-child(5){
	margin: .15rem .15rem 0 .15rem;
	display: inline-block;		
	font-size: .28rem;
	color: #88888b;		
}
.inner span:nth-child(6){
	position: absolute;
	right: 0;
    margin: 0.15rem 0.35rem 0.15rem 0.15rem;
	font-size: .28rem;
	color: #88888b;	    	
}
</style>
