<template>
	<div class="info">
		<liuCell
		title = "帮助中心"  title-size = "0.3rem"  titleColor = "#000"
		height = "0.8rem"  padding = "0 0.15rem" 
		addText = ""  arrow = true  @click = "go"
		/>
	</div>
</template>

<script>
	import liuCell from './liu-cell.vue'
	export default {
		name: "Info",
		props:{
			
		},
		comments:{
			liuCell,
		}
	}
</script>

<style scoped>
	
</style>
