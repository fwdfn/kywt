<template>
<div class="bg">
	<div class="info">
		<div class="inner">
			<img class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img  class="inner_img"src="../../assets/arrow-right.png" alt="" />
			<span>书记</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>处室</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img  class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>王校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img  class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>王校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img  class="inner_img"src="../../assets/arrow-right.png" alt="" />
			<span>王校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>王校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img class="inner_img" src="../../assets/arrow-right.png" alt="" />
			<span>王校长</span>
			<span>20</span>
		</div>
		<div class="inner">
			<img class="inner_img"src="../../assets/arrow-down.png" alt="" />
			<span>王校长</span>
			<span>20</span>
			<div class="info_inner">
				<div class="left_">
					<img src="../../assets/ic_icon.png" alt="" />
				</div>
				<div class="right_">
					<p>张主任</p>
					<p>以礼待人，以德服人</p>
				</div>
			</div>
			<div class="info_inner">
				<div class="left_">
					<img src="../../assets/ic_icon.png" alt="" />
				</div>
				<div class="right_">
					<p>张主任</p>
					<p>以礼待人，以德服人</p>
				</div>
			</div>
			<div class="info_inner">
				<div class="left_">
					<img src="../../assets/ic_icon.png" alt="" />
				</div>
				<div class="right_">
					<p>张主任</p>
					<p>以礼待人，以德服人</p>
				</div>
			</div>
			<div class="info_inner">
				<div class="left_">
					<img src="../../assets/ic_icon.png" alt="" />
				</div>
				<div class="right_">
					<p>张主任</p>
					<p>以礼待人，以德服人</p>
				</div>
			</div>			
		</div>		
	</div>
	<tab></tab>			
</div>
</template>
<script>
import tab from '@/components/tab/tab'		
export default {
  name: 'linkman',
  data () {
    return {
      
    }
  },
 components: { 
  tab: tab ,
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
	background-color: #F7FAFB;
}
.info{
	margin: 0.1rem 0 0 0.1rem;
}
.inner{
	position: relative;
	height: .8rem;
	width: 100%;
	line-height: 0.8rem;
	background: #fff;
	border-bottom: 1px solid #D2D2D2;
}
.inner .inner_img{
	width: 0.3rem;
	height: 0.375rem;
	margin-top: 0.2rem;
	padding-left: .15rem;
}
.inner span:nth-child(2){
	position: absolute;
	margin-left: 0.25rem;
	color: #181817
}
.inner span:nth-child(3){
	position: absolute;
	right: 0.35rem;
	color: #737475;
}
.info_inner{
	height: 0.88rem;
    width: 95%;
    margin-left: 2.5%;
	line-height: 0.88rem;
	border-bottom: 1px solid #D2D2D2;
}
.left_{
	width: 0.64rem;
	height: 0.64rem;
	float: left;
}
.left_ img{
	width: 0.64rem;
    height: 0.64rem;
	margin: 0.15rem;    
}
.right_{
	float:left;
    margin-left: 0.35rem;	
}
.right_ p{
	height: 0.4rem;
    font-size: 0.14rem;
    line-height: 0.4rem;
}
</style>
