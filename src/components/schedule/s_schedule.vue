<template>
	<div class="bg">
		<div v-for="arr in res">
			<div class="bg_color" >
				<div class="title">
					<span>{{arr.week}}</span>
					<span>{{arr.year}}</span>
					<span>{{arr.day}}</span>
				</div>
				<div class="select" v-for=" res__ in arr.content">
					<div class="inner">
						<div class="inner_p">
							<p>{{res__.ident}}{{res__.hour}}</p>
							<p>{{res__.content}}</p>
						</div>
						<div class="inner_img">
							<img  src="../../assets/stop.png" alt="" />
							<img @click="del(res__.id)" src="../../assets/error.png" alt="" />
						</div>
					</div>
				</div>
				<!--<div class="select bg_select_o">
					<div class="inner inner_o">
						<div class="inner_p">
							<p>上午8：30</p>
							<p>参加五十周年校庆活动</p>
						</div>
					</div>
				</div>-->
			</div>				
		</div>
	
		<!--第二部分-->

		<!--foot-->
		<router-link class="foot" tag="div" :to="{name:'s_edit'}">
			<img src="../../assets/edit.png" alt="" />
			<span>添加行程</span>		
		</router-link>

</div>
		
</template>

<script>
//export default {
//name: 's_schedule',
//data () {
//  return {
//    
//  }
//}
//}
import Vue from 'vue'
import { Toast } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    name: 's_schedule',
    data() {
        return {
           user_id: '', 
           res:[],
           content:[]
        }
    },
    create(){
    	
    },
    mounted: function() {
			const self=this;
				let data = {
					"user_id": this.GLOBAL.user_id,
				}
				console.log(self.$route)
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'Dayplan/dayplan',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
//						self.$router.push({ path: '/tab/home' })
					 	self.res = response.data.data; 
					 	console.log(self.res);
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					  });    	
    },
    methods: {
		del:function(e){
			const self=this;
			console.log(e)
				let data = {
				    "id": e,
				}
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'Dayplan/del_plan',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
					    	Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/tab/home' })
					    );										
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					  });  			
		}
	}
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
 	width:100%;         
}
.tabs img{
	
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
	padding-top: .29rem;
}
.title{
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: #fff;
}
.title span{
	padding-left: .15rem;
} 
.select{
	background-color: #d1d1d1;
	width: 100%;
}
.inner{
	margin: 0.08rem .45rem;
	border-left: 2px solid #0486bf;
	width: 6.6rem;
	height: 1.04rem;
}
.inner_p{
	height: 1.04rem;
	width: 4.5rem;
	float: left;
	margin-left: 0.35rem;	
	line-height: 0.54rem;
}
.inner_p p{
	color:#393939;
	font-size: 0.3rem;
}
.inner_img{
	height: 1.04rem;
	width: 1.4rem;	
	float: left;
	right: 0.3rem;	
    vertical-align: middle;
    line-height: 1.04rem;
    text-align: center;	
}
.inner_img img{
	width: 0.36rem;
	height: 0.36rem;
    display: inline-block;
    position: relative;
    margin-top: 0.35rem;	
}
.inner_img :nth-child(2){
	margin-left: 0.25rem;
}
.bg_select_o{
	background: #fff;	
}
.inner_o{
	border-left: 2px solid #ef8916;	
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
