<template>
  <div class="home" ref="home" :class="{'sidebar-toggled': isSidebarToggled}">
    <NavBar></NavBar>
    <div class="d-flex">
      <SideBar></SideBar>
      <router-view @clickSidebar="clickSidebar"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    SideBar,
    NavBar,
  },

  data() {
    return {
      isSidebarToggled: false,
    };
  },

  methods: {
    clickSidebar() {
      this.isSidebarToggled = !this.isSidebarToggled;
    },
  },
};
</script>
