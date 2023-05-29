
<template>
  <div>
    <ul>
      <li v-for="post in posts">
          {{ post }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { getPost } from '../../apis/postApi';

const posts = ref([])

watchEffect(() => {
  console.log("watch.............")
  getPost().then(data => {
    console.log(data)
    posts.value = data
  })
})

</script>
