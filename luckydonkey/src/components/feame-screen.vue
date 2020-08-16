<template>
	<div v-if = "type == 'detail'" class="detail"></div>
	
	
	
	<div v-else-if = "type == 'home'" class="home"></div>
	
	
	
	<div v-else-if = "type == 'list'" class="list"></div>
</template>

<script>
	export default {
		name: "Skeleton",
		props:{
			type:String,
		}
	}
</script>

<style scoped>
	
</style>
