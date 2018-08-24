<template>
	<div class="bg">
		<div class="inner">
			<div class="info">
				<label for="">请假类型</label>
				<input type="text" v-model="type"/>
			</div>
			<div class="info" @click="openPicker">
				<label for="">开始时间</label>
				<span>{{dateTime}}</span>
				<span>请选择(必填)</span>
				<!--<img src="../../assets/arrow-right.png" alt="" />-->
			</div>
			<div class="info"  @click="openPicker_w">
				<label for="">结束时间</label>
				<span>{{dateTime_}}</span>
				<span>请选择(必填)</span>
				<!--<img src="../../assets/arrow-right.png" alt="" />-->
			</div>	
			<div class="info">
				<label for="">时长(小时)</label>
				<input type="text" v-model="duration" placeholder="请输入请假时长"/>
			</div>	
			<div class="info_info">
				<label for="">请假事由</label>
				<textarea type="text" v-model="reason" placeholder="请输入请假事由"></textarea>
			</div>	
			<mt-datetime-picker
			    ref="picker"
			    type="datetime"
			    @confirm="handleConfirm">
		  	</mt-datetime-picker>
		  				<mt-datetime-picker
			    ref="picker_"
			    type="datetime"
			    @confirm="handleConfirm_w">
		  	</mt-datetime-picker>
			<!--<div class="info">
				<label for="">所在部门</label>
				<span>请选择(必填)</span>
				<img src="../../assets/arrow-right.png" alt="" />
			</div>	
			<div class="info">
				<label for="">审批人</label>
			</div>				
				<div class="info_tx">
					<ul>
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>				
						<li>
							<img src="../../assets/tx.png"/>
							<p>校长</p>
						</li>	
					</ul>
				</div>	-->
				<button class="btn" @click="edit" >提交</button>
		</div>
	</div>
</template>
<script>
//export default {
//name: 'need_leave',
//data () {
//  return {   
//  }
//}
//}
import Vue from 'vue'
import { Toast } from 'mint-ui';
import axios from 'axios'
import Qs from 'qs'
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
//import { DatetimePicker } from 'mint-ui'
import moment from 'moment'// 格式化时间
//import Vue from 'vue'
//Vue.component(DatetimePicker.name, DatetimePicker)
export default {
    name: 'need_leave',
    data() {
        return {
           user_id: '', 
           res:[],
           type:'',
	      dateTime: '',
	      dateTime_: '',	      
	      textarea:'',
	      duration:'',
	      reason:'',
	      startDate: new Date()           
        }
    },
    create(){
    	
    },
    methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (data) {
      let date = moment(data).format('YYYY-MM-DD hh:mm:ss')
      this.dateTime = date;      
    },
    openPicker_w () {
      this.$refs.picker_.open()
    },
    handleConfirm_w (data) {
      let date = moment(data).format('YYYY-MM-DD hh:mm:ss')
      this.dateTime_ = date;      
    },    
		edit:function(){
			const self=this;
				let data = {
					"user_id": this.GLOBAL.user_id,	
					"type":this.type,
					"start_time":this.dateTime,
					"end_time":this.dateTime_,
					"duration":this.duration,
					"reason" :this.reason
				}
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'Leave/add_leave',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
					    	Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/leave/leave' })
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
.router-link-active {
	color: #1296db;
}
.bg{
	background-color: #F7fafb;
	height: 100%;
	width: 100%;
}
.inner{
	padding-top: 0.09rem;	
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
.info span:nth-child(3){
    position: absolute;
    right: 0.3rem;
	font-size: 0.26rem;
	color: #2b2a2a;
}
.info img{
	width: 0.3rem;
	height: 0.3rem;
	vertical-align: middle;
}
.info_info{
	height: 2.8rem;
	width: 100%;
	line-height: 0.8rem;
	background-color: #fff;
	border-bottom: 1px solid #eaedee;	
}
.info_info label{
	width:1.5rem;
	margin-left: 0.3rem;
	font-size: 0.28rem;
	display:inline-block;
	position: absolute;	
}
.info_info textarea{	
	outline: none;
	border: none;
	position: absolute;
	margin-left: 2.2rem;
    margin-top: 0.2rem;
    height: 2.5rem;
    width: 5rem;
}
.info_tx{
     border-bottom: 1px solid #eaedee;
}
.info_tx ul{
	width: 100%;
	display: table;
}
.info_tx li{
	width: 0.75rem;
	display: inline-block;
    padding: 0.08rem 0.12rem;	
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
