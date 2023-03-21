<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pageTittle: '行事曆',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
