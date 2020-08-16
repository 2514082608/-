<template>
	<ul class="show">
		<router-link v-for = "(item,index) of data" :key = "item.id" 
		:to = "{name:item.collectionName,prarms:{_id:item._id},query:{collectionName:item.collectionName}}" tag="li"
		>
			<p :style = "{backgroundColor:item.backgroundColor}">
				<img :src="item.url" alt="" :style = "{width:pictureWidth,height:pictureWidth}">
			</p>
			<span>{{item.content}}</span>
		</router-link>
	</ul>
</template>

<script>
	export default {
		name: "Show",
		props: {
			data:{
				type: Array,
				required: true
			},
			pictureWidth:{
				type: String,
				default: "50%"
			}
		},
	}
</script>

<style scoped>
	 .show{
	    width: 96%;
	    height: 3rem;
		margin: 0 auto;
		background-color: #fff;
	    display: flex;
	    flex-wrap: wrap;
	    align-items: center;
		padding-top: 0.1rem;
	}
	.show li{
	    width: 1rem;
	    height: 1.2rem;
	    margin: 0.15rem 0.26rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.show li p{
		width:100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
		/* background-color: green; */
	}
	.show li p img{
		width:80%;
		height:80%;
	}
</style>
