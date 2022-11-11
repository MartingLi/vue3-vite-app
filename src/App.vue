

<template>
	<div>
		<!-- <router-view></router-view> -->
    <button @click="change">Change</button>
    <div>{{message}}</div>
	</div>

</template>


<script setup lang="ts">
  import {ref, Ref} from 'vue'
  // import {ref,Ref} from 'vue'
  let message:Ref<String> = ref("message")
  const change = () =>{
    message.value = "new message"
  }
</script>
<style>

</style>
