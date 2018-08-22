import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/Login'
import reg from '@/components/login/reg'
import forget from '@/components/login/forget'
import tab from '@/components/tab/tab'
import home from '@/components/tab/home'
import homepage from '@/components/tab/homepage'
import linkman from '@/components/tab/linkman'
import my from '@/components/tab/my'
import password from '@/components/tab/password'
import info from '@/components/tab/info'
import n_detail from '@/components/notice/n_detail'
import n_edit from '@/components/notice/n_edit'
import release from '@/components/notice/release'
import s_edit from '@/components/schedule/s_edit'
import s_schedule from '@/components/schedule/s_schedule'
import customer from '@/components/customer/customer'
import c_tab from '@/components/c_customer/c_tab'
import c_customer from '@/components/c_customer/c_customer'
import already from '@/components/c_customer/already'
import done from '@/components/c_customer/done'
import nodeal from '@/components/c_customer/nodeal'
import potential from '@/components/c_customer/potential'
import c_detail from '@/components/c_customer/c_detail'
import d_nodeal from '@/components/c_customer/d_nodeal'
import add_project from '@/components/add_project/add_project'
import has_project from '@/components/progress/has_project'
import detail_project from '@/components/progress/detail_project'
import report_tab from '@/components/report/report_tab'
import report from '@/components/report/report'
import received from '@/components/report/received'
import edit_received from '@/components/report/edit_received'
import detail_received from '@/components/report/detail_received'
import message from '@/components/message/message'
import m_edit from '@/components/message/m_edit'
import m_detail from '@/components/message/m_detail'
import leave from '@/components/leave/leave'
import need_leave from '@/components/leave/need_leave'
import detail_leave from '@/components/leave/detail_leave'
import examine_leave from '@/components/leave/examine_leave'
import buy from '@/components/buy/buy'
import need_buy from '@/components/buy/need_buy'
import detail_buy from '@/components/buy/detail_buy'
import Mint from 'mint-ui'
Vue.use(Mint);
Vue.use(Router)

export default new Router({
	//	mode: 'history',
	routes: [{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/login/reg',
			name: 'reg',
			component: reg
		},
		{
			path: '/login/forget',
			name: 'forget',
			component: forget
		},
		{
			path: '/tab/tab',
			name: 'tab',
			component: tab,
		},
		// redirect: '/tab/home',
		//children:[
		{
			path: '/tab/home',
			name: 'home',
			component: home
		},
		{
			path: '/tab/linkman',
			name: 'linkman',
			component: linkman
		},
		{
			path: '/tab/my',
			name: 'my',
			component: my
		},
		{
			path: '/tab/password',
			name: 'password',
			component: password
		},
		{
			path: '/tab/info',
			name: 'info',
			component: info
		},
		{
			path: '/tab/homepage',
			name: 'homepage',
			component: homepage,
		}, {
			path: '/notice/n_detail',
			name: 'n_detail',
			component: n_detail
		}, {
			path: '/notice/n_edit',
			name: 'n_edit',
			component: n_edit
		}, {
			path: '/notice/release',
			name: 'release',
			component: release
		}, {
			path: '/schedule/s_edit',
			name: 's_edit',
			component: s_edit
		}, {
			path: '/schedule/s_schedule',
			name: 's_schedule',
			component: s_schedule
		}, {
			path: '/customer/customer',
			name: 'customer',
			component: customer
		}, {
			path: '/c_customer/c_customer',
			name: 'c_customer',
			component: c_customer
		}, {
			path: '/c_customer/already',
			name: 'already',
			component: already
		}, {
			path: '/c_customer/done',
			name: 'done',
			component: done
		},
		{
			path: '/c_customer/c_tab',
			name: 'c_tab',
			component: c_tab,
			redirect: '/c_customer/nodeal',
		}, {
			path: '/c_customer/nodeal',
			name: 'nodeal',
			component: nodeal
		}, {
			path: '/c_customer/potential',
			name: 'potential',
			component: potential
		}, {
			path: '/c_customer/c_detail',
			name: 'c_detail',
			component: c_detail
		},
		{
			path: '/c_customer/d_nodeal',
			name: 'd_nodeal',
			component: d_nodeal
		},
		{
			path: '/add_project/add_project',
			name: 'add_project',
			component: add_project
		}, {
			path: '/progress/has_project',
			name: 'has_project',
			component: has_project
		}, {
			path: '/progress/detail_project',
			name: 'detail_project',
			component: detail_project
		}, {
			path: '/report/report_tab',
			name: 'report_tab',
			component: report_tab,
			redirect: '/report/report',
		}, {
			path: '/report/report',
			name: 'report',
			component: report
		}, {
			path: '/report/received',
			name: 'received',
			component: received
		}, {
			path: '/report/edit_received',
			name: 'edit_received',
			component: edit_received
		}, {
			path: '/report/detail_received',
			name: 'detail_received',
			component: detail_received
		}, {
			path: '/message/message',
			name: 'message',
			component: message
		}, {
			path: '/message/m_edit',
			name: 'm_edit',
			component: m_edit
		}, {
			path: '/message/m_detail',
			name: 'm_detail',
			component: m_detail
		}, {
			path: '/leave/leave',
			name: 'leave',
			component: leave
		}, {
			path: '/leave/need_leave',
			name: 'need_leave',
			component: need_leave
		}, {
			path: '/leave/detail_leave',
			name: 'detail_leave',
			component: detail_leave
		}, {
			path: '/leave/examine_leave',
			name: 'examine_leave',
			component: examine_leave
		}, {
			path: '/buy/buy',
			name: 'buy',
			component: buy
		}, {
			path: '/buy/need_buy',
			name: 'need_buy',
			component: need_buy
		}, {
			path: '/buy/detail_buy',
			name: 'detail_buy',
			component: detail_buy
		}
	]
})