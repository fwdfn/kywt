<template>
	<div class="bg">
		<div class="info">
			<div class="body">
				<p>{{res.title}}</p>
				<div class="body_">
					<span></span>
					<span>{{res.time}}</span>
					<!--<span>{{res.number}}人已读</span>-->
				</div>
			</div>
			<div class="inner">
				<div>{{res.content}}
				
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//$route.params.id
import Vue from 'vue'
import { Toast } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    name: 'm_detail',
    data() {
        return {
           user_id: '', 
           res:[]
        }
    },
    create(){
    	
    },
    mounted: function() {
			const self=this;
				let data = {
				    "id": self.$route.params.id,
				}
				console.log(self.$route.params.id)
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'message/detail',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
//						self.$router.push({ path: '/tab/home' })
					 	self.res = response.data.data;  
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					  });    	
    },
    methods: {
		
		
	}
   }		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.router-link-active {
		color: #1296db;
	}
.bg{
	background-color: #f6fbfa;
	width: 100%;
	height: 100vh;
	padding-bottom: 1.3rem;    	
}
.body{
	height: .9rem;
	width: 7rem;
	background-color: #fff;
	padding: 0.1rem .25rem;
	border-bottom: 1px solid #d5dcdf;	
}
.body p{
	font-size: .3rem;
	color: #292929;
}
.info{
	padding-top: 0.2rem;
}
.body_{
	margin-top:.1rem ;
}
.body_ :nth-child(1),.body_ :nth-child(2){
	font-size: .26rem;
	color: #818181;
}
.body_ :nth-child(3){
	float: right;
	right: .35rem;
	color: #149af2;
	font-size: .26rem;
}
.inner{
	background-color: #fff;
	height: auto;
	width: 7.5rem;
	line-height: 0.9rem;
	margin-top: 0.25rem;	
}
.inner div{
	font-size: 0.3rem;
	margin: 0 0.5rem 0 0.5rem;
	line-height: 0.4rem;	
}	
.foot{
	position: fixed;
	bottom: 0;
	height: 1rem;
	line-height: 1rem;
	width: 100%;
	background: #fff;
	border-top: 1px solid #bebebe;
}
.foot ul li{
	list-style: none;
	display: inline-block;
    width: 100%;
	text-align: center;	
    vertical-align: middle;
    color: #24a3ed;	
    font-size: .32rem;
} 
.left_hr{
	border-left: 1px solid #bebebe;
}
</style>