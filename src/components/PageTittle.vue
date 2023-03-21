<template>
  <div>
    <button
        class="navbar-toggler my-0 d-none d-lg-inline-block toggle-btn mt-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar"
        @click="clickSidebar"
      >
        <span class="material-icons-outlined fs-2">menu</span>
      </button>
      <div class="d-flex align-items-center">
        <div class="flex-grow-1 ms-3">
          <h2 class="fw-bolder text-center ">{{ pageTittle }}</h2>
        </div>
        <div class="flex-shrink-0">
          <img
          class="rounded float-end"
          src="img/2.Logo2.png"
          alt=""
          width="60"
          height="80"
        />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['pageTittle'],
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
