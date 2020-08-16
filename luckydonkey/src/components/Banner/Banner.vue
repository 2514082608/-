<template>
	<div id="banner">
	    <div class="banner-in">     
	        <div class="banner-play">        
	            <div class="banner-show">
	                <p>&lt;</p>
	                <p>&gt;</p>
	             <ul class="banner-list">
						<li
						v-for = "(item,index) of data"
						:key = "item.id"
						>
							<img :src = "item.url">
						</li>
					</ul>
	            </div>          
	             <ol class="title-list">
					<li
					v-for = "(item,index) of data"
					:key = "item.id"
					>
					</li>
				</ol>
	        </div>
	    </div>
	</div>
</template>

<script>
	import bannerPlay from "./bannerPlay.js"
	export default {
		name: "Banner",
		props:{
			data: { 
				type: Array,
				default: [],
				required: true ,
			}
		},
		// mounted(){
		// 	var banner = new bannerPlay(this.data);
		// },
		updated(){
			var banner = new bannerPlay(this.data);
		}
	}
</script>

<style scoped>
	#banner {
	  width: 96%;
	  height: 2.7rem;
	  border-radius: 0.02rem;
	  margin: 0 auto;
	}
	#banner .banner-in {
	  height: 2.7rem;
	}
	#banner .banner-in .banner-play {
	  width: 100%;
	  height: 2.7rem;
	  position: relative;  
	}
	#banner .banner-in .banner-play .banner-show {
	  height: 2.7rem;
	  background-color: #fff;
	  border-radius: 0.2rem;
	  overflow: hidden;
	  position: relative;
	  transition: all 1s ease-out;
	}
	#banner .banner-in .banner-play .banner-show .banner-list {
	  height: 100%;
	}
	#banner .banner-in .banner-play .banner-show .banner-list li {
	  height: 100%;
	  float: left;
	}
	#banner .banner-in .banner-play .banner-show .banner-list li img {
	  width: 100%;
	  height: 100%;
	}
	#banner .banner-in .banner-play .banner-show > p:nth-of-type(1), #banner .banner-in .banner-play .banner-show p:nth-of-type(2) {
	  width: 0.33rem;
	  height: 0.66rem;
	  font-size: 0.24rem;
	  color: #fff;
	  line-height: 0.66rem;
	  text-align: center;
	  background-color: rgba(0, 0, 0, 0.2);
	  cursor: pointer;
	  position: absolute;
	  top: 50%;
	  margin-top: -0.53rem;
	  transition: all 0.3s ease-in;
	}
	#banner .banner-in .banner-play .banner-show > p:nth-of-type(1):hover, #banner .banner-in .banner-play .banner-show p:nth-of-type(2):hover {
	  background-color: rgba(0, 0, 0, 0.5);
	}
	#banner .banner-in .banner-play .banner-show > p:nth-of-type(1) {
	  left: -0.33rem;
	}
	#banner .banner-in .banner-play .banner-show > p:nth-of-type(2) {
	  right: -0.33rem;
	}
	#banner .banner-in .banner-play .banner-show:hover p:nth-of-type(1) {
	  left: 0;
	}
	#banner .banner-in .banner-play .banner-show:hover p:nth-of-type(2) {
	  right: 0;
	}
	#banner .banner-in .banner-play .title-list {
	    position: absolute;
	    bottom: 0.2rem;
		left: 2.3rem;
	}
	#banner .banner-in .banner-play .title-list li {
	  width: 0.2rem;
	  height: 0.2rem;
	  background-color: #fff;
	  border-radius: 50%;
	  margin-right: 0.2rem;
	  cursor: pointer;
	  float: left;
	}
	#banner .banner-in .banner-play  .title-list li.active{
		background-color: #000;
	}
</style>
