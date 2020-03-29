<template>
  <div class="home">
    <users />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'

export default {
  name: 'Home',
  components: {
    Users
  }
}
</script>
