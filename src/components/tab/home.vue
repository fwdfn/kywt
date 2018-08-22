<template>
	<div>
		<homepage></homepage>
		<tab></tab>		
	</div>
</template>

<script>
import tab from '@/components/tab/tab'
import homepage from '@/components/tab/homepage'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: { 
  tab: tab ,
  homepage:homepage
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
    width: 100%;
    height: 100vh;
    margin-bottom: 1.5rem;	
}
.info{
	background-color: #3fb4ed;
	width: 3.4rem;
	height: 2.5rem;
	float: left;
	margin-left: 0.24rem;
	margin-top: 0.1rem;
}
.inner{
	background-color: #209edc;
	width: 3.4rem;
	height: 2.5rem;
	float: left;
	margin-left: 0.24rem;
	margin-top: 0.1rem;		
}
.center{
	text-align: center;
}
.center img{
	width: 0.55rem;
	height: 0.55rem;
	margin-top: 0.7rem;
}
.center p{
	font-size: .36rem;
	color:#fff;
	margin-top: 0.3rem;
}
</style>
