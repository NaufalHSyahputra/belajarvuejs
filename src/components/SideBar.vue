<template>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Dashboard</li>
        <li>
          <router-link :to="{ name: 'Home' }">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Data' }">
            <i class="fas fa-table"></i>
            <span>Data</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  name: "SideBar"
};
</script>
