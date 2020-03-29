<template>
  <div class="users">
    <div class="users__header">
      <h2 class="users__title">
        Users List
      </h2>
      <label class="users__search-input">
          <span>Search:</span>
         <input type="text" v-model="search">
      </label>
    </div>
    <div class="users__list users-list">
      <table class="table">
        <thead>
          <tr>
            <td v-for="(item, index) in header" :key="index">
              {{ item.title }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginationData" :key="user.id" @click="$router.push(`/user/${user.id}`)">
            <td>
              {{ user.id }}
            </td>
            <td>
              {{ user.first_name }} {{ user.last_name}}
            </td>
            <td>
              {{ user.email }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="users__footer">
      <pagiantion :total-items="filteredUsers.length"
                  :per-page="perpage"
                  @changePage="changePage"
      />
      <select v-model="perpage" class="users__perpage" @change="page = 1">
        <option >5</option>
        <option>10</option>
        <option>15</option>
        <option value=''>all</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Pagiantion from './Paginator'

export default {
  name: 'users',
  data() {
    return {
      header: [
        {title: 'ID'},
        {title: 'Full Name'},
        {title: 'E-mail'}
      ],
      filteredUsers: [],
      search: '',
      userData: {},
      perpage: 5,
      page: 1,
    }
  },
  components: {
    Pagiantion
  },
  methods: {
    ...mapActions([
      'GET_USERS'
    ]),
    usersSearch(value) {
      this.filteredUsers = this.USERS.filter((user) => {
        return user.first_name.toLowerCase().includes(value.toLowerCase()) || user.last_name.toLowerCase().includes(value.toLowerCase());
      })
    },
    changePage(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapGetters([
      'USERS',
      'getUserById'
    ]),
    paginationData() {
      if(this.perpage) {
        const from = (this.page - 1) * this.perpage;
        const to = from + this.perpage;
        return this.filteredUsers.slice(from, to);
      } else {
        return this.filteredUsers
      }
    }
  },
  watch: {
    search() {
      this.usersSearch(this.search);
    },
    USERS() {
      this.usersSearch(this.search);
    }
  },
  mounted() {
    this.GET_USERS()
  }

}
</script>

<style>

</style>