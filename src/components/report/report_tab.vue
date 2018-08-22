<template>
	<div>
		<div class="tabs">
			<ul>
				<router-link :to="{name:'report'}" tag="li" exact>
					我发送的
				</router-link>
				<router-link :to="{name:'received'}" tag="li">
					我收到的
				</router-link>
			</ul>
		</div>
		<router-view class="content"></router-view>
	</div>
</template>

<script> 
	export default {
		name: 'report_tab',
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
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		border-bottom: 1px solid #ecf1f0;
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
		color: #7c7c7d;
	}
	
	.router-link-active {
		color: #1296db;
	}
</style>