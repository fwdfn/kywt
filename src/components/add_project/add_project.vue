<template>
	<div class="bg">
		<div class="bg_title">
			<div class="info">
				<label for="">项目名称</label>
				<input type="text" placeholder="请输入项目名称(必填)"/>
			</div>
			<div class="info">
				<label for="">部门</label>
				<input type="text" placeholder="请输入部门(必填)"/>
			</div>
			<div class="info">
				<label for="">参与人员</label>
				<span>请选择(必填)</span>
				<img src="../../assets/arrow-right.png" alt="" />
			</div>
			<div class="info_tx">
				<ul>					
					<li v-for="arr in res" :key="arr.id"  @click="active(arr)" :class="{'active':classenable==arr}" >
						<img :src="arr.img"/>
						<p>{{arr.name}}</p>
					</li>	
					<!-- :class="{'active':classenable -->
					<!-- <li v-for="(item,index) in items" v-on:mouseover="addClassload(index)" v-on:mouseover="removeClassload(index)" v-bind:class="{ classred:classenable&&index==current}">
						{{item.title}}
					</li>											 -->
				</ul>
			</div>
			<button class="btn">提交</button>						
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import Qs from 'qs'
	// 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出
	export default {
		// name:'add_project',
		data(){
			return {
				user_id:'',
				id:'',
				name:'',
				img:'',
				res:[],
				arr:[],	
				ind:'',		
				classenable:false,						
			}
		},
		props:["lie"],
		created:function(){
			const self=this
			let data={
				"user_id":self.GLOBAL.user_id
			}
			axios({
				method:'post',
				url:self.GLOBAL.baseURL+'Project/execute_list',				
				data:Qs.stringify(data)
			}).then(function(response){				
				self.res=response.data.data;														
				Vue.set(self.arr,'clicked',false);								 				
			}).catch(function(error){
				console.log(error);
			})
		},
		methods:{
			active:function(arr){	
				this.classenable=arr;									
			//this.classenable=!this.classenable;						
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
	width: 1.3rem !important;
	border:1px solid red !important; 
}
.tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
 	width:100%;         
}
ul {
    display: table;
    width: 100%;
}
ul li {
    text-align: center;
    font-size: 16px;
    display: inline-block;
    padding: 0.08rem 0.25rem;
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
.bg_title{
	padding-top: .29rem;
}
.info{
	height: 0.8rem;
	width: 100%;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;
}
.info label{
	width:1.5rem;
	margin-left: 0.3rem;
	font-size: 0.28rem;
	display:inline-block;	
}
.info input{
	width: 4.5rem;
	height: 0.5rem;
	border: none;
	outline: none;
	margin-left: 0.3rem;
	vertical-align: middle;
}
.info span{
	margin-left: 3.5rem;
	font-size: 0.28rem;
	color: #2b2a2a;
}
.info img{
	width: 0.3rem;
	height: 0.3rem;
	vertical-align: middle;
}
.info_tx{
     border-bottom: 1px solid #eaedee;
}
.info_tx ul{
	width: 100%;
}
.info_tx li{
	width: 1.3rem;
	border:1px solid transparent;
}
.info_tx img{
	width:  0.75rem;
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
</style>
