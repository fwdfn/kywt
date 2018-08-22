<template>
	<div class="bg">
		<div class="bg_color">
			<div class="info"@click="openPicker">
				<span>时间:</span>
				<span>{{dateTime}}</span>
				<span>请选择日期</span>
				<img src="../../assets/arrow-right.png" alt="" />
			</div>
			<mt-datetime-picker
			    ref="picker"
			    type="datetime"
			    @confirm="handleConfirm">
		  	</mt-datetime-picker>
			<div class="inner">
				<textarea name="" v-model="textarea"  rows=""class="textarea" placeholder="请输入内容(必填)"cols=""></textarea>
			</div>
	
			<button class="btn" @click="edit">保存</button>
		</div>
	</div>
</template>

<script>
//export default {
//name: 's_edit',
//data () {
//  return {
//    
//  }
//}
//}

//export default {
//data () {
//  return {
//    dateTime: '',
//    startDate: new Date()
//  }
//},
//methods: {
//  openPicker () {
//    this.$refs.picker.open()
//  },
//  handleConfirm (data) {
//    let date = moment(data).format('YYYY.MM.DD')
//    this.dateTime = date
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
    name: 's_edit',
    data() {
        return {
           user_id: '', 
           res:[],
	      dateTime: '',
	      textarea:'',
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
		edit:function(){
			const self=this;
				let data = {
					"user_id": this.GLOBAL.user_id,	
					"time":this.dateTime,
					"content":this.textarea
				}
				axios({
				    method: 'post',
				    url: self.GLOBAL.baseURL+'Dayplan/add_plan',
				    data: Qs.stringify(data)
				}).then(function (response) {
						console.log(response);
					    if(response.data.code == '1'){
					    	Toast({
							  message: response.data.msg,
							  position: 'middle',
							  duration: 2000
						},
						self.$router.push({ path: '/schedule/s_schedule' })
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
.info{
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: #FFFFFF;
}
.info span:nth-child(1){
	padding-left: 0.35rem;
	font-size: .3rem;
	color: #393838;
	float:left;
}
.info span:nth-child(2){
	padding-left: 0.35rem;
	font-size: .3rem;
	color: #393838;
	float:left;
}
.info span:nth-child(3){
	float:right;
	font-size: .3rem;
	color: #393838;	
	margin-right: 0.75rem;
}
.info img:nth-child(4){
	width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.22rem;
	display: inline-block;
    position: absolute;
    right: 0.4rem;
}
.inner{
	margin-top: 0.35rem;
	width: 100%;
	height: auto;
	background-color: #FFF;
}
.textarea{
	width: 100%;
	height: 7rem;
	border:none;
	outline: none;
	font-size: 0.3rem;
	color: #000;
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
