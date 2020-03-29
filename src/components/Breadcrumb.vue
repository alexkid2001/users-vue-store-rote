<template>
<div class="breadcrumb">
  <ul class="breadcrumb__list">
    <li v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        @click="routeTo(index)"
        class="breadcrumb__item"
        :class="{'linked': !!breadcrumb.link}"
    >
      {{ breadcrumb.name }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.updateList();
  },
  watch: {
    '$route'() {
      this.updateList();
    }
  },
  methods: {
    routeTo(index) {
      if (this.breadcrumbList[index].link) {
        this.$router.push(this.breadcrumbList[index].link)
      }
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
      this.breadcrumbList.forEach((item) => {
        if (item.bcGetter) {
          const user = this.$store.getters[item.bcGetter](this.$route.params.id)
          item.name = user.first_name + ' ' + user.last_name;
        }
      });
    }
  }
}
</script>

<style>

</style>