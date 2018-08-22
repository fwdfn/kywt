<template>
	<div class="body">
  	<div class="img_icn">
  		<img class="img_" src="../../assets/ic_icon.png" alt="" />
	  	<div class="acc">
	  		<img src="../../assets/id.png" alt="" />
	  		<input type="number" name="phone" v-model="phone" id="" value="" placeholder="请输入账号或则手机号"/>
	  	</div>
	  	<div class="acc password">
	  		<img src="../../assets/key.png" alt="" />
	  		<input type="number" name="password" v-model="password"   id="" value="" placeholder="密码"/>
	  	</div>	 
	  	<div class="login">
	  		<!--<router-link :to="{ path: '/tab/home' }">	 --> 	
	  			<input type="submit" @click="submit" id="" value="登录" />
	  		<!--</router-link>-->	  	
	  	</div>	
	  	<div class="reg">
				<router-link :to="{ path: '/login/forget' }">	  		  		
		  			<a href="">忘记密码</a>
	  			</router-link>		  			
		  			<span>|</span>
				<router-link :to="{ path: '/login/reg' }">	  			
	  				<a href="">注册账号</a>
	  			</router-link>
	  	</div>
  	</div>	
	</div>
</template>

<script>
//export default {
//name: 'login',
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
    name: 'login',
    data() {
        return {
           phone: '',  
           password:''
        }
    },
    methods: {
		submit:function() {	
			const self = this;
			if (this.phone == "" || this.password == "") {
		       Toast({
				  message: '请输入完整的信息',
				  position: 'middle',
				  duration: 2000
				});
		   }else{
				let data = {
				    "phone": this.phone,
				    "password" : this.password,			    
				}
				axios({
				    method: 'post',
				    url: 'http://m.kywtwl.com/Login/login',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
							self.GLOBAL.user_id=response.data.data.user_id				    	
					    	Toast({
							  message: '登录成功',
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/tab/home' })
					    );
					    }else{
    						Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						})					    	
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
	color: #fff;
	font-size: 0.30rem;
}   
:-moz-placeholder{
	color: #fff;
	font-size: 0.30rem;	
}           
::-moz-placeholder{
	color: #fff;
	font-size: 0.3rem;		
}          
:-ms-input-placeholder{
	color: #fff;
	font-size: 0.3rem;		
}	
.body{
	background: url(../../../src/assets/bg_personage.png) no-repeat;
 	background-size:7.5rem 100vh;
 	text-align: center;
}
.img_icn{
	width: 7.5rem;
	height: 100vh;
	 
}
.img_icn .img_{
	width: 1.5rem;
	height: 1.5rem;
	margin: 1.5rem auto 1.5rem auto;
}
.acc{
	position: relative;
}
.acc img{
    position: absolute;
    margin-top: 0.25rem;
    margin-left: 0.2rem;
    width: 0.3rem;
}
.acc input{
	width: 5.5rem;
	height:0.9rem;
	border-radius: 25rem;
	outline: none;
	border: none;
	background-color: #576779;
	padding-left: 0.9rem;
}
.password{
	margin-top: 0.5rem;
}
.login input{
	width:6.3rem;
	height: 0.9rem;
	margin-top: 0.5rem;
	background-color: #0f6dad;	
	outline: none;
	border: none;
	border-radius: 25rem;
	color:#fff;
}
.reg{
	margin-top: 0.5rem;
}
.reg a{
	display: inline-block;
	font-size: 0.28rem;
	width: 1.8rem;	
}
</style>
