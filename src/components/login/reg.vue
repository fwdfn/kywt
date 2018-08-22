<template>

	<div class="body">
  	<div class="img_icn">
  		<!--<header class="mui-bar">
  			<router-link to="/">			
  				<img class="mui-icon" src="../../assets/arrow-left.png"/>
  			</router-link>
			<h1 class="mui-title">注册</h1>
		</header>-->
		<mt-header fixed title="注册">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
  		<img class="img_" src="../../assets/ic_icon.png" alt="" />
  		<button class="code" @click="code_" >获取验证码</button>
	<form @submit.prevent="submit">  		
		<div class="reg_div">
			<div class="div_hr">
				<img src="../../assets/iphoe.png" alt="" />
				<input type="number" v-model="phone" value="" placeholder="请输入手机号"/>
			</div>
			<div class="div_hr">
				<img src="../../assets/code.png" alt="" />
				<input type="number" v-model="code" value="" placeholder="请输入短信验证码"/>
			</div>			
			<div class="div_hr">
				<img src="../../assets/name.png" alt="" />
				<input type="text" v-model="password" value="" placeholder="请输入密码"/>
			</div>
			<div class="div_hr">
				<img src="../../assets/name.png" alt="" />
				<input type="text" v-model="name" value="" placeholder="请输入姓名"/>
			</div>			
			<div class="div_hr department">
				<img src="../../assets/company.png" alt="" style="margin-left: -0.5rem;"/>
				<select name="department" id="select">
				  <option value ="1">总管理</option>
				  <option value ="2">行政</option>
				  <option value="3">商务</option>
				  <option value="4">执行</option>
				</select>				
			</div>
			<div class="div_hr">
				<img src="../../assets/section.png" alt="" style="margin-left: -0.5rem;" />
				<select name="sex" id="sex">
				  <option value ="1">男</option>
				  <option value ="2">女</option>
				</select>	
			</div>		
			<div class="div_hr">
				<img src="../../assets/key_zc.png" alt="" />
				<input type="text" v-model="company"  value="" placeholder="请输入公司"/>
			</div>		
		</div>	
		<div class="login">
	  		<input type="button" @click.stop.prevent="submit" value="注册" />
	  	</div>	
	</form>
  	</div>	
	</div>
</template>

<script>
//export default {
//name: 'reg',
//data() {
//	return {
//
//	}
//}
//
//}

import Vue from 'vue'
import { Toast } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    name: 'reg',
    data() {
        return {
           code:'',
           name: '',
           phone: '',
           department:'',
           position:'',
           password:'',
           company:''
        }
    },
    methods: {
		submit:function() {	
			var myselect=document.getElementById("select");
			var sex=document.getElementById("sex"); 		
			if (this.name =="" || sex.options[sex.selectedIndex].value =='' || this.code == "" || this.phone == "" || myselect.options[myselect.selectedIndex].value =='' || this.company == '' ||
				this.password == ""
			) {
		       Toast({
				  message: '请输入完整的信息',
				  position: 'middle',
				  duration: 2000
				});
		   }else{
				let data = {
				    "phone": this.phone,
				    "password" : this.password,
				    "code":this.code,
				    "name":this.name,
				    "type":myselect.options[myselect.selectedIndex].value,
				    "sex": sex.options[sex.selectedIndex].value,
				    "company":this.company				    
				}
				axios({
				    method: 'post',
				    url: 'http://m.kywtwl.com/Login/regist',
				    data: Qs.stringify(data)
				})		   	
		   }
		},
		code_: function(){
			var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
			if(this.phone=='' ||!myreg.test(this.phone) ){
				Toast({
				  message: '请输入正确的手机号',
				  position: 'bottom',
				  duration: 2000
				});	
			}else{
				Toast({
				  message: '短信验证码已发出',
				  position: 'bottom',
				  duration: 2000
				});	
				let data = {
				    "phone": this.phone,
				}
				axios({
				    method: 'post',
				    url: 'http://m.kywtwl.com/Login/code',
				    data: Qs.stringify(data)
				})		  
			}
		}
	}
   }
//var vm = new Vue({
//	el: '#app',	
//	  data()){
//	      return {
//         name: '44'
//      }
//	  },
//	methods: {
//		submit() {	
//			console.log(415)
//		}
//	}
//});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-input-placeholder{
	color:#bebfbf;
	font-size: 0.30rem;
}   
:-moz-placeholder{
	color:#bebfbf;
	font-size: 0.30rem;	
}           
::-moz-placeholder{
	color:#bebfbf;
	font-size: 0.3rem;		
}          
:-ms-input-placeholder{
	color:#bebfbf;
	font-size: 0.3rem;		
}	
/*顶部导航*/
.mui-bar{
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: .88rem;
    line-height: .88rem;
    padding-right: .2rem;
    padding-left: .2rem;
    border-bottom: 0;
    background-color: #f7f7f7;	
}
.mui-icon{
	font-size: .48rem;
    position: relative;
    z-index: 20;
    padding-top: .2rem;
    padding-bottom: .2rem;
    width: 0.50rem;
    height:0.50rem;
    float: left;
}
.mui-title{
    right: .8rem;
    left: .8rem;
    display: inline-block;
    overflow: hidden;
    width: auto;
    margin: 0 0 0 -0.5rem;
    font-size: .4rem;
    text-overflow: ellipsis;	
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
	margin: 1.5rem auto 0.5rem auto;
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
.reg_div{
	margin: auto;
	width: 6rem;
	height: 6.5rem;
	opacity:0.8;
	border-radius:0.15rem ;
	background-color: #5b6f7e;
}
.div_hr{
	width:5rem;
	margin-left: 0.5rem;
	height: 0.9rem;
	line-height: 0.9rem;
	position: relative;
	border-bottom: 1px solid #44596a;
}
.div_hr img{
    width: 0.46rem;
    height: 0.52rem;
    line-height: 0.56rem;
    margin-top: 0.17rem;
    position: absolute;
}
.div_hr input{
	margin-top: -0.17rem;
	outline: none;
	border:none;
	background: none;
	height: 0.9rem;
	margin-left: 0.7rem;	
}
.code{
    position: absolute;
    margin-left: 0.1rem;
    margin-top: 3.75rem;
    padding: 0.1rem;
    background-color: #0f6dad;
    outline: none;
    border: none;
    border-radius: 0.08rem;
    color: #fff;
    z-index: 100000;
}
select {
	background: transparent;
    width: 3.5rem;
    margin-left: 0.2rem;
    padding: 0.1rem;
    font-size: 0.32rem;
    border: 1px solid #ccc;
    height: 0.68rem;
    -webkit-appearance: none;
}
</style>
