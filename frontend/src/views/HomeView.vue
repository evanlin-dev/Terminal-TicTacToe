<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserMessages />
  </div>
</template>

<script>
// @ is an alias to /src
import UserMessages from '../components/UserMessages.vue'

export default {
  name: 'HomeView',
  components: {
    UserMessages,
}
}
</script>
