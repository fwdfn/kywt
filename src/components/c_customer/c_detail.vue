<template>
	<div class="bg">
		<div class="bg_color">
			<div class="info">
				<label for="">姓名</label>
				<input type="text" class="" v-model="name" readonly />
			</div>
			<div class="info">
				<label for="">性别</label>
				<input type="text" class="" v-model="sex" readonly />
			</div>
			<div class="info">
				<label for="">联系方式</label>
				<input type="text" class="" v-model="phone" readonly />
			</div>
			<div class="info">
				<label for="">地址</label>
				<input type="text" class="" v-model="address" readonly />
			</div>
			<div class="info">
				<label for="">单位名称</label>
				<input type="text" class="" v-model="company" readonly />
			</div>
			<div class="info">
				<label for="">项目类型</label>
				<input type="text" class="" v-model="type" readonly/>
			</div>
			<!--<div class="inner">
				<label class="label">意向指数</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">待考虑</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">一般</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">较强</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">很强</label>
			</div>-->
			<!--反馈-->
			<div class="feedback">
				<div class="feedback_info" @click="showToggle">
					<span>跟踪反馈</span>
					<img src="../../assets/addition.png" alt="" />
				</div>
				<div class="feedback_inner" v-for="arr in res.feedback">
					<p class="bg_border">
						<span></span>
					</p>
					<span>{{new Date(arr.time*1000).toLocaleString()}}</span>
					<div class="text_info">
						{{arr.content}}
					</div>
				</div>
			</div>
			<!--留言-->
			<!--<div class="info info_height">
				<p class="info_p">备注</p>
				<textarea name="" rows="" cols="" class="info_textarea"></textarea>
			</div>-->
			<!--成交状态-->
			<div class="inner ab" @click="showToggle_btn">
				<!--<label class="label">成交状态</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">未成交</label>
				<input type="radio" name="radio" class="" value="App" /><label for="">已成交</label>-->
				<input type="button" name="radio" class="" value="成交" />
			</div>
		</div>
		<!--遮罩层-->
		<div v-show="isShow">
			<div class="z_index"></div>
			<div class="index_info">
				<div class="hr_blue">

				</div>
				<div class="z_index_body">
					<!--<div class="z_index_input">
						<label for="">成交日期</label>
						<input type="text" />
					</div>
					<div class="z_index_input">
						<label for="">合同编号</label>
						<input type="text" />
					</div>
					<div class="z_index_input">
						<label for="">合同金额</label>
						<input type="text" />
					</div>
					<div class="z_index_input">
						<label for="">合同金额</label>
						<input type="text" />
					</div>
					<div class="z_index_input">
						<label for="">项目名称</label>
						<input type="text" />
					</div>
					<div class="z_index_input">
						<label for="">项目周期</label>
						<input type="text" />
					</div>-->
					<div class="z_index_textarea">
						<p>客户反馈</p>
						<textarea name="" v-model="content"  rows="" cols=""></textarea>
					</div>					
					<div class="foot">
						<ul>
							<li @click="submit">确认</li>
							<li @click="can">取消</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div v-show="isShow_btn">
			<div class="z_index"></div>
			<div class="index_info">
				<div class="hr_blue">
				</div>
				<div class="z_index_body_">
					<div class="z_index_input">
						<label for="">合同编号</label>
						<input type="text"  v-model="ht_code"/>
					</div>
					<div class="z_index_input">
						<label for="">合同金额</label>
						<input type="text" v-model="ht_money" />
					</div>
					<div class="z_index_input">
						<label for="">项目周期</label>
						<input type="text" v-model="ht_cycle" />
					</div>							
					<div class="z_index_input">
						<label for="">项目名称</label>
						<input type="text" v-model="ht_project" />
					</div>
					<div class="foot">
						<ul>
							<li @click="submit_btn">确认</li>
							<li @click="can_btn">取消</li>
						</ul>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	//export default {
	//name: 'c_detail',
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
		name: 'c_detail',
		data() {
			return {
				id:'',
				user_id: '',
				name: '',
				sex: '',
				phone: '',
				address: '',
				project: '',
				company: '',
				type: '',
				res: [],
				isShow: false,
				isShow_btn: false,
				content:'',
				ht_code:'',
				ht_money:'',
				ht_cycle:'',
				ht_project:''		
			}
		},
		mounted: function() {
			const self = this;
			console.log(4155)
			let data = {
				"user_id": self.GLOBAL.user_id,
				"id": self.$route.params.id,
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Client/client_detail',
					data: Qs.stringify(data)
				}).then(function(response) {
					console.log(response);
					if(response.data.code == '1') {
						//self.res = response.data.data; 
						self.res = response.data.data;
						self.name = self.res[0].name;
						self.sex = self.res[0].sex;
						self.phone = self.res[0].tel;
						self.address = self.res[0].address;
						self.company = self.res[0].company;
						self.type = self.res[0].type;
						//反馈接口数据
					}
				})
				.catch(function(error) {
					console.log(error);
				});

		},
		methods: {
			showToggle_btn: function() {
				this.isShow_btn = !this.isShow_btn
			},
			showToggle: function() {
				this.isShow = !this.isShow
			},
			submit:function(){
			const self = this;
			let data = {
				"user_id": self.GLOBAL.user_id,
				"id": self.$route.params.id,
				"content": this.content
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Client/feed',
					data: Qs.stringify(data)
				}).then(function(response) {
					console.log(response);
					if(response.data.code == '1') {
						self.res = response.data.data;	
						Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/c_customer/nodeal' })
					    );
					}
				})
				.catch(function(error) {
					console.log(error);
				});				
			},
			submit_btn:function(){
			const self = this;
			console.log(4155)
			let data = {
//				"user_id": self.GLOBAL.user_id,
				"id": self.$route.params.id,
				"ht_code": this.ht_code,
				"ht_money": this.ht_money,
				"ht_cycle": this.ht_cycle,
				"ht_project": this.ht_project,				
			}
			axios({
					method: 'post',
					url: self.GLOBAL.baseURL + 'Client/make',
					data: Qs.stringify(data)
				}).then(function(response) {
					console.log(response);
					if(response.data.code == '1') {
						self.res = response.data.data;	
						Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/c_customer/nodeal' })
					    );
					}
				})
				.catch(function(error) {
					console.log(error);
				});				
			},			
			can:function(){
				this.isShow = !this.isShow
			},
			can_btn:function(){
				this.isShow_btn = !this.isShow_btn
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
		width: 100%;
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
	
	.router-link-active {
		color: #1296db;
	}
	
	.bg {
		background-color: #F6FBFA;
		height: 100vh;
		width: 100%;
	}
	
	.bg_color {
		padding-top: .29rem;
	}
	
	.info {
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #fff;
		border-bottom: 1px solid #eaedee;
	}
	
	.info label {
		width: 1.2rem;
		font-size: 0.28rem;
		color: #2b2a2a;
		padding-left: 0.35rem;
		display: inline-block;
	}
	
	.info input {
		width: 5rem;
		height: 0.8rem;
		padding-left: 0.5rem;
		font-size: 0.28rem;
		border: none;
		outline: none;
	}
	
	.inner {
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #fff;
		border-bottom: 1px solid #eaedee;
	}
	
	.inner .label {
		width: 1.2rem!important;
		font-size: 0.28rem;
		color: #2b2a2a;
		padding-left: 0.35rem!important;
		display: inline-block;
	}
	
	.inner label {
		width: 0.9rem;
		padding-left: 0.15rem;
	}
	
	.feedback {
		width: 100%;
		height: auto;
		line-height: 0.8rem;
		background-color: #fff;
		vertical-align: middle;
	}
	
	.feedback_info span {
		padding-left: 0.35rem;
		font-size: .28rem;
		color: #1f1f1f;
	}
	
	.feedback_info img {
		width: 0.28rem;
		height: 0.28rem;
		display: inline-block;
		margin-left: 0.1rem;
	}
	
	.bg_border {
		width: 0.28rem;
		height: 0.28rem;
		background-color: #fc9e25;
		border-radius: 50%;
		display: inline-block;
	}
	
	.bg_border :after {
		content: "1";
		color: #fff;
		font-size: 12px;
		position: absolute;
		margin-top: -0.25rem;
		margin-left: 0.07rem;
	}
	
	.feedback_inner {
		margin-left: .25rem;
	}
	
	.text_info {
		width: 6.5rem;
		margin-left: 0.5rem;
		background-color: #e2e4e6;
		line-height: 1.5;
	}
	
	.info_p {
		display: inline-block;
		display: inline-block;
		margin-left: 0.35rem;
	}
	
	.info_textarea {
		display: block;
		/* position: absolute; */
		margin-left: 0.75rem;
		width: 6.48rem;
		/* margin-top: 0.35rem; */
		height: 1.8rem;
	}
	
	.info_height {
		height: 2.6rem;
	}
	
	.ab {
		position: relative;
		margin-top: 0.25rem;
	}
	.ab input{
		width:6.3rem;
		height: 0.9rem;
		margin-top: 0.5rem;
		background-color: #0f6dad;	
		outline: none;
		border: none;
		border-radius: 25rem;
		color:#fff;
		margin-left: 0.6rem;		
	}	
	.btn {
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
	/*遮罩层css
*/
	
	.z_index {
		background-color: #666666;
		height: 100vh;
		width: 100%;
		z-index: 93;
		position: absolute;
		top: 0;
		opacity: 0.3;
	}
	
	.index_info {
		z-index: 95;
		top: 50%;
		position: absolute;
		width: 4.8rem;
		height: 5.4rem;
		margin-left: 1.35rem;
		margin-top: -2.4rem;
		border-radius: 0.1rem;
	}
	
	.hr_blue {
		width: 100%;
		height: .1rem;
		background-color: #149aed;
	}

	.z_index_body {
		width: 100%;
		height: 4.5rem;
		background-color: #fff;
	}
	.z_index_body_ {
		width: 100%;
		height: 3.5rem;
		background-color: #fff;
	}	
	.z_index_textarea{
		padding: 0.15rem 0.15rem 0.15rem 0.15rem;	
	}	
	.z_index_textarea textarea{
		width: 100%;
    	height: 3.25rem;
    	outline: none;
	}
	.z_index_input {
		padding: 0.15rem 0.15rem 0.15rem 0.35rem;
	}
	
	.z_index_input label {
		width: 1.2rem;
		font-size: 0.28rem;
	}
	
	.z_index_input input {
		width: 2.7rem;
		height: 0.36rem;
		outline: none;
	}
	
	.foot {
		background-color: #e5e5e5;
	}
	
	.foot li:nth-child(1) {
		color: #0fa2fc;
	}
	
	.foot li:nth-child(2) {
		color: #7d7e7f;
		border-left: 1px solid #b8b8b8;
	}
</style>