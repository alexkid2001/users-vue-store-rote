<template>
<div>
  <div class="user">
    <div class="user__wrap">
      <div class="user__title">User Details ID: {{ userData.id }}</div>
      <div class="user__info-block">
        <div class="user__avatar">
          <img :src="userData.avatar" :alt="userData.last_name">
        </div>
        <div class="user__info">
          <ul class="info-list">
            <li class="info-list__item">
              <div class="info-list__param">First Name:</div>
              <div class="info-list__value">{{ userData.first_name }}</div>
            </li>
            <li class="info-list__item">
              <div class="info-list__param">Last Name:</div>
              <div class="info-list__value">{{ userData.last_name }}</div>
            </li>
            <li class="info-list__item">
              <div class="info-list__param">E-mail:</div>
              <div class="info-list__value">{{ userData.email}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="return-link" @click="$router.go(-1)">Return</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserDetails',
  // props: ['id'],
  data() {
    return {
      // userData: {},
      id: null
    }
  },
  computed: {
    ...mapGetters([
      'getUserById'
    ]),
    userData() {
      return this.getUserById(this.$route.params.id);
    }
  },
  mounted() {
    // this.id = this.$route.params.id;
    // if (!this.$route.params.id) this.router.push('/');
    // this.userData = this.getUserById(this.id); 
  }
}
</script>

<style>

</style>