<template>
	<div class="bg">
		<div class="bg_color">
			<div class="title">
				<input type="text" class="input" v-model="title"  placeholder="标题(必填)，4-40字" />
			</div>		
			<div class="textarea">
				<textarea name="" v-model="content" placeholder="正文(必填)  15-500字"class="textarea_"rows="" cols=""></textarea>
			</div>
			<button class="btn" @click="submit">发布</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
export default {
    name: 'm_edit',
    data() {
        return {
           user_id: '', 
		   title:'',
		   content:'',
           res:[]
        }
    },
    create(){
    	
    },
    methods: {
		submit:function(){
			const self=this;
				let data = {
				    "user_id": this.GLOBAL.user_id,
				    "title" : this.title,
				    "content":this.content
				}
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'message/release',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
					    	Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/message/message' })
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
.input{
	width: 100%;
	height: 0.75rem;
	border: none;
	outline: none;
}
.textarea{
	margin-top: 0.35rem;
}
.textarea_{
	width:100%;
	border:none;
	outline:none;
	height: 2.5rem;
}
.file{
	width: 100%;
	height: 1.8rem;
	line-height: 1.8rem;
}
.border{
	border: 1px dotted #aeaeae;
	height: 1.2rem;
	width: 1.2rem;
	text-align: center;
	vertical-align: middle;
	margin-left: 0.3rem;
    display: inline-block;	
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
::-webkit-input-placeholder{
	color: #adadad;
	font-size: .28rem;
	padding-left: 0.5rem;	
}    /* 使用webkit内核的浏览器 */
:-moz-placeholder{
	color: #adadad;	
	font-size: .28rem;	
	padding-left: 0.5rem;	
}                  /* Firefox版本4-18 */
::-moz-placeholder{
	color: #adadad;	
	font-size: .28rem;	
	padding-left: 0.5rem;	
}                  /* Firefox版本19+ */
:-ms-input-placeholder{
	color: #adadad;	
	font-size: .28rem;
	padding-left: 0.5rem;		
}   
</style>
