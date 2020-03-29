<template>
<ul class="pagination" v-if="totalPage">
  <li class="pagination__item"
      :class="{disabled: curIndex === 1}"
      @click="decPage">
    <span>&laquo;</span>
  </li>
  <li class="pagination__item" 
      v-for="(item, index) in totalPage"
      :key="index"
      :class="{active: curIndex === index + 1}"
      @click="pageClick(index + 1)">
    <span>{{ index + 1 }}</span>
  </li>
  <li class="pagination__item"
      :class="{disabled: curIndex === totalPage}"
      @click="incPage">
    <span>&raquo;</span>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['totalItems', 'perPage'],
  data() {
    return {
      curIndex: 1,
    }
  },
  computed: {
    totalPage() {
      if (this.perPage && this.totalItems > this.perPage) {
        return Math.ceil(this.totalItems / this.perPage);
      } else {
        return 0;
      }
    }
  },
  methods: {
    pageClick(index) {
      this.curIndex = index;
      this.eventClick();
    },
    incPage() {
      if (this.curIndex < this.totalPage) {
        this.curIndex++;
        this.eventClick();
      }
    },
    decPage() {
      if (this.curIndex) {
        this.curIndex--;
        this.eventClick();
      }
    },
    eventClick() {
      this.$emit('changePage', this.curIndex);
    },
    resetCutIndex() {
      this.curIndex = 1;
      this.eventClick()
    },
    calcTotaPage() {
      // if (this.perPage && this.totalItems > this.perPage) {
      //   this.totalPage = Math.ceil(this.totalItems / this.perPage);
      // } else {
      //   this.totalPage = 0;
      // }
      // this.resetCurPage();
    }
  },
  mounted() { 
  },
  updated() {
    if (this.curIndex > this.totalPage) this.curIndex = 1;
    this.eventClick();
  }
}
</script>

<style>
</style>