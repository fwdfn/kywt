<template>
<div class="bg_color">
		<div class="content_head">
				<div class="bg">
						<div class="center">
							<img :src="$route.params.img" alt="" />
							<p>{{ $route.params.name }}</p>
				<!--			<p>web-前端</p>-->
						</div>
				</div>
				<div class="body_margin">
					<div class="info">
						<img src="../../assets/ture_key.png" alt="" />
						<input type="password" v-model="old" placeholder="旧密码"/>
					</div>
					<div class="info">
						<img src="../../assets/ture_key.png" alt="" />
						<input type="password" v-model="new_p" placeholder="新密码"/>
					</div>
					<div class="info">
						<img src="../../assets/ture_key.png" alt="" />
						<input type="password" v-model="new_" placeholder="确认密码"/>
					</div>					
				</div>
		</div>
		<button @click="submit">确认</button>
</div>
</template>

<script>
//export default {
//name: 'password',
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
    name: 'password',
    data() {
        return {
           user_id: '', 
           new_:'',
           new_p:'',
           old:''
        }
    },
    create(){
    	
    },
    methods: {
		submit:function() {	
			const self=this;
			if(this.new_ !=this.new_p){
		       Toast({
				  message: '两次输入的密码不一致',
				  position: 'middle',
				  duration: 2000
				});
				return false;
			}
			if (this.old == "" || this.new_ == "") {
		       Toast({
				  message: '请输入密码',
				  position: 'middle',
				  duration: 2000
				});
				return false;
		   }else{
				let data = {
				    "user_id": self.GLOBAL.user_id,
				    "password" : this.old,
				    "newpasswd": this.new_p
				}
				axios({
				    method: 'post',
				    url: 'http://m.kywtwl.com/Login/uppasswd',
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
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-input-placeholder{
	font-size: 0.30rem;
}   
:-moz-placeholder{
	font-size: 0.30rem;	
}           
::-moz-placeholder{
	font-size: 0.3rem;		
}          
:-ms-input-placeholder{
	font-size: 0.5rem;		
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
    display: table-cell;
    padding: 8px 12px;
    cursor: pointer;
}    
.router-link-active{
	color:#1296db;
}
.bg_color{
	background-color: #eee;
	height:100vh;
	width: 100vw;
}
.bg{
	background: url(../../../src/assets/bg_personage.png) no-repeat;
 	width: 100%;
 	height: 3.4rem;
}
.center{
	text-align: center;
}
.center img{
	width: 1.5rem;
	height: 1.5rem;
	border: 4px solid #fff;
	border-radius: 50%;
	margin-top: .45rem;
}
.center p{
	color: #f7fafb;
	font-size: 0.3rem;
}
.body_margin{
	margin-top: 0.25rem;
}
.info{
	width: 100%;
	border-bottom:1px solid #d2d2d2;
	height: 1.05rem;
	background-color: #fff;
	line-height: 1.05rem;
}
.info img{
	width: 0.3rem;
	height: 0.375rem;
	position: relative;
}
.info :nth-child(1){
	text-align: left;
	display: inline-block;
	padding-top: .35rem;
	padding-left: 0.35rem;
}
.info :nth-child(2){
	text-align: left;
	padding-left: .35rem;
	position: absolute;	
	height:1.05rem;
	width: 6.5rem;
	outline: none;
	border: none;
}
button{
	width: 6rem;
	height: 0.8rem;
	background-color: #1c9fed;
	color: #fff;
	margin-left: 0.75rem;
	margin-top: 0.5rem;
	outline: none;
	border: none;
	border-radius: 0.1rem;
}
</style>
