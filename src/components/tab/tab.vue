<template>
	<div>
		<div class="tabs">
			<ul>
				<router-link :to="{name:'home'}" tag="li" exact>
					<div>
						<img src="../../assets/home_blue.png" alt="" />
					</div>
					<div>首页</div>
				</router-link>
				<router-link :to="{name:'linkman'}" tag="li">
					<div>
						<img src="../../assets/linkman.png" alt="" />
					</div>
					<div>联系人</div>
				</router-link>
				<router-link :to="{name:'my'}" tag="li">
					<div>
						<img src="../../assets/me.png" alt="" />
					</div>
					<div>我</div>
				</router-link>
			</ul>
		</div>
		<router-view class="content"></router-view>
	</div>
</template>

<script> 
	export default {
		name: 'tab',
		data() {
			return {

			}
		},

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
	
	.tabs img {}
	
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
</style>